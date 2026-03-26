const API_BASE = window.API_BASE || "http://localhost:3000";

async function login(){
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Input validation
    if (!username || !password) {
        document.getElementById("msg").innerText = "Username and password cannot be empty";
        return;
    }

    try {
        const res = await fetch(API_BASE + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await res.json();

        if (!res.ok) {
            document.getElementById("msg").innerText = data.message || "Login failed";
            return;
        }

        document.getElementById("msg").innerText = data.message || "Login successful";
        
        // Save token and redirect after successful login
        if (res.status === 200 && data.token) {
            localStorage.setItem("token", data.token);
            window.location.href = "restaurants.html";
        }
    } catch (error) {
        document.getElementById("msg").innerText = "Network error, please check your connection";
        console.error("Login error:", error);
    }
}

async function loadProfile() {
    const token = localStorage.getItem("token");
    if (!token) {
        return;
    }

    try {
        const res = await fetch(API_BASE + "/profile", {
            headers: { "Authorization": "Bearer " + token }
        });

        if (!res.ok) {
            return;
        }

        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error("Load profile error:", error);
    }
}

document.addEventListener('DOMContentLoaded', function(){
    loadProfile();
});