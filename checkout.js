let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

document.getElementById("checkout-form").addEventListener("submit", function(e) {
  e.preventDefault();
  // For demonstration only; real implementation should link to payment gateway
  localStorage.removeItem("cart");
  document.getElementById("confirmation").innerText =
    "Thank you! Your order has been placed successfully.";
  updateCartCount();
});
