let cart = [];

function addToCart(item) {
    // Read from the latest localStorage to keep data synchronized
    cart = JSON.parse(localStorage.getItem('cart') || "[]");
    cart.push(item);
    alert(item + " added to cart");
    localStorage.setItem('cart', JSON.stringify(cart));
}

function placeOrder() {
    cart = JSON.parse(localStorage.getItem('cart') || "[]");
    if(cart.length === 0){
        alert("Your cart is empty!");
    } else {
        alert("Order placed: " + cart.join(", "));
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        const cartElement = document.getElementById("cart");
        if (cartElement) {
            cartElement.innerHTML = "";
        }
    }
}
async function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Input validation
    if (!username || !password) {
        document.getElementById("msg").innerText = "Username and password cannot be empty";
        return;
    }

    try {
        const res = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        if (!res.ok) {
            document.getElementById("msg").innerText = "Login failed, please try again later";
            return;
        }

        const data = await res.json();
        document.getElementById("msg").innerText = data.message || "Login result is uncertain";
        
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
        const res = await fetch("http://localhost:3000/profile", {
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

// Show cart items on order page
document.addEventListener('DOMContentLoaded', function(){
    loadProfile();

    const cartElement = document.getElementById("cart");
    if(cartElement){
        cart = JSON.parse(localStorage.getItem('cart') || "[]");
        cart.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            cartElement.appendChild(li);
        });
    }
});