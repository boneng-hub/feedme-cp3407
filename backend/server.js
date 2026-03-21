const jwt = require("jsonwebtoken");

// Secret key used to sign tokens (can be moved to environment variables later)
const JWT_SECRET = "feedme_super_secret_key";
const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");

// Create a database connection pool
const pool = mysql.createPool({
    host: "localhost",    // Or a cloud host address
    user: "root",         // Database username
    password: "root",   // Database password
    database: "feedme"    // Database name
});
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
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

app.post("/api/orders", async (req, res) => {
    const { restaurant_id, total_price } = req.body;

    // Temporary: hardcode user_id until full auth integration for orders
    const user_id = 1;

    try {
        const [result] = await pool.query(
            "INSERT INTO orders (user_id, restaurant_id, total_price) VALUES (?, ?, ?)",
            [user_id, restaurant_id, total_price]
        );

        res.json({
            message: "Order created",
            orderId: result.insertId
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /register
app.post("/register", async (req, res) => {
    const { username, password } = req.body;

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
    const { username, password } = req.body;

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

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});