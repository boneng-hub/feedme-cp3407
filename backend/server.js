const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const jwt = require("jsonwebtoken");

const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");
const express = require("express");
const cors = require("cors");

const PORT = Number(process.env.PORT) || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "feedme_super_secret_key";

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_USER = process.env.DB_USER || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "root";
const DB_NAME = process.env.DB_NAME || "feedme";
const DB_CONN_LIMIT = Number(process.env.DB_CONN_LIMIT) || 10;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";

if (JWT_SECRET === "feedme_super_secret_key") {
    console.warn("Warning: using default JWT secret. Set JWT_SECRET in production.");
}

// Create a database connection pool
const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: DB_CONN_LIMIT,
    queueLimit: 0
});

const app = express();

app.use(cors({ origin: CORS_ORIGIN === "*" ? true : CORS_ORIGIN }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

    if (!token) return res.status(401).json({ message: "No token provided" });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        req.user = user; // Attach user info to request object
        next();
    });
}

app.get("/", (req,res)=>{
    res.send("FeedMe API running");
});

app.get("/profile", authenticateToken, async (req, res) => {
    // req.user includes id and username from JWT payload
    res.json({ id: req.user.id, username: req.user.username });
});

app.get("/api/restaurants", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM restaurants");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/api/health", async (req, res) => {
    try {
        await pool.query("SELECT 1");
        res.json({
            status: "ok",
            db: "connected",
            uptimeSeconds: Math.floor(process.uptime()),
            env: process.env.NODE_ENV || "development"
        });
    } catch (err) {
        res.status(500).json({ status: "error", db: "disconnected", error: err.message });
    }
});

app.get("/api/menu/:restaurantId", async (req, res) => {
    const restaurantId = Number(req.params.restaurantId);

    if (!Number.isInteger(restaurantId) || restaurantId <= 0) {
        return res.status(400).json({ error: "Invalid restaurantId" });
    }

    try {
        const [rows] = await pool.query(
            "SELECT * FROM menu_items WHERE restaurant_id = ?",
            [restaurantId]
        );

        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/api/orders", authenticateToken, async (req, res) => {
    const { restaurant_id, total_price, items } = req.body;
    const user_id = req.user.id;

    if (!Number.isInteger(restaurant_id) || restaurant_id <= 0) {
        return res.status(400).json({ message: "Invalid restaurant_id" });
    }

    if (!Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ message: "Order items cannot be empty" });
    }

    const parsedTotal = Number(total_price);
    if (!Number.isFinite(parsedTotal) || parsedTotal <= 0) {
        return res.status(400).json({ message: "Invalid total_price" });
    }

    try {
        const [restaurants] = await pool.query(
            "SELECT id FROM restaurants WHERE id = ? LIMIT 1",
            [restaurant_id]
        );

        if (restaurants.length === 0) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }

    const normalizedItems = [];
    for (const item of items) {
        const name = String(item?.name || "").trim();
        const price = Number(item?.price);
        const quantity = Number(item?.quantity);

        if (!name || !Number.isFinite(price) || price <= 0 || !Number.isInteger(quantity) || quantity <= 0) {
            return res.status(400).json({ message: "Invalid item payload" });
        }

        normalizedItems.push({ name, price, quantity });
    }

    const calculatedTotal = normalizedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    if (Math.abs(calculatedTotal - parsedTotal) > 0.01) {
        return res.status(400).json({ message: "total_price does not match item totals" });
    }

    const conn = await pool.getConnection();

    try {
        await conn.beginTransaction();

        const [result] = await conn.query(
            "INSERT INTO orders (user_id, restaurant_id, total_price) VALUES (?, ?, ?)",
            [user_id, restaurant_id, parsedTotal]
        );

        const orderId = result.insertId;

        for (const item of normalizedItems) {
            await conn.query(
                "INSERT INTO order_items (order_id, name, price, quantity) VALUES (?, ?, ?, ?)",
                [orderId, item.name, item.price, item.quantity]
            );
        }

        await conn.commit();

        res.json({
            message: "Order created",
            orderId
        });
    } catch (err) {
        await conn.rollback();
        res.status(500).json({ error: err.message });
    } finally {
        conn.release();
    }
});

app.get("/api/my-orders", authenticateToken, async (req, res) => {
    const user_id = req.user.id;

    try {
        const [orders] = await pool.query(
            "SELECT * FROM orders WHERE user_id = ? ORDER BY id DESC",
            [user_id]
        );

        for (const order of orders) {
            const [items] = await pool.query(
                "SELECT * FROM order_items WHERE order_id = ?",
                [order.id]
            );
            order.items = items;
        }

        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /register
app.post("/register", async (req, res) => {
    const username = String(req.body?.username || "").trim();
    const password = String(req.body?.password || "");

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    try {
        // Check whether the username already exists
        const [existing] = await pool.query("SELECT * FROM users WHERE username = ?", [username]);
        
        if (existing.length > 0) {
            return res.status(400).json({ message: "Username already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save to database
        await pool.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword]);
        
        res.json({ message: "Registration successful" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

app.post("/login", async (req, res) => {
    const username = String(req.body?.username || "").trim();
    const password = String(req.body?.password || "");

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        const [rows] = await pool.query("SELECT * FROM users WHERE username = ?", [username]);
        if (rows.length === 0) return res.status(401).json({ message: "Invalid username or password" });

        const user = rows[0];
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ message: "Invalid username or password" });

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, username: user.username },
            JWT_SECRET,
            { expiresIn: "1h" } // Expires after 1 hour
        );

        res.json({ message: "Login successful", token });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});