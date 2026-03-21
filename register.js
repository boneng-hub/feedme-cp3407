async function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();
        document.getElementById("msg").innerText = data.message;

    } catch (error) {
        document.getElementById("msg").innerText = "Server error";
        console.error(error);
    }
}