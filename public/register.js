async function register() {
    const API_BASE = window.API_BASE || "http://localhost:3000";

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !password) {
        document.getElementById("msg").innerText = "Username and password cannot be empty";
        return;
    }

    if (password.length < 6) {
        document.getElementById("msg").innerText = "Password must be at least 6 characters";
        return;
    }

    try {
        const res = await fetch(API_BASE + "/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();
        if (!res.ok) {
            document.getElementById("msg").innerText = data.message || "Register failed";
            return;
        }

        document.getElementById("msg").innerText = data.message || "Registration successful";

        setTimeout(() => {
            window.location.href = "login.html";
        }, 800);

    } catch (error) {
        document.getElementById("msg").innerText = "Server error: please make sure backend is running on port 3000";
        console.error(error);
    }
}