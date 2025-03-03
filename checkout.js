// Load cart data from localStorage
let cart = JSON.parse(localStorage.getItem("DataCart")) || [];
const orderSummary = document.getElementById("orderSummary");
const totalPriceEl = document.getElementById("totalPrice");
const placeOrderBtn = document.getElementById("placeOrder");



document.body.insertAdjacentHTML("beforeend", `
    <div id="couponSection">
        <input type="text" id="couponCode" placeholder="Enter coupon code">
        <button id="applyCoupon">Apply Coupon</button>
    </div>
`);

const applyCouponBtn = document.getElementById("applyCoupon");
const couponCodeInput = document.getElementById("couponCode");

// Display order summary
function displayOrderSummary() {
    orderSummary.innerHTML = "";
    let total = 0;
    
    cart.forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.className = "order-item";
        itemDiv.innerHTML = `<p>${item.name} - $${item.price}</p>`;
        orderSummary.appendChild(itemDiv);
        total += item.price;
    });
    
    totalPriceEl.textContent = total.toFixed(2);
}

displayOrderSummary();

// Handle order placement
placeOrderBtn.addEventListener("click", () => {
    alert("Order placed successfully!");
    localStorage.removeItem("DataCart");
    setTimeout(() => {
        window.location.href = "day14.html";
    }, 2000);
});
