let cart = [];

function addToCart(item) {
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
        document.getElementById("cart")?.innerHTML = "";
    }
}

// Show cart items on order page
window.onload = function(){
    if(document.getElementById("cart")){
        cart = JSON.parse(localStorage.getItem('cart') || "[]");
        let ul = document.getElementById("cart");
        cart.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
        });
    }
};