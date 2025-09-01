let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();
renderCart();

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function renderCart() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("cart-total").innerText = "";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${item.img}" width="100" />
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    container.appendChild(div);
  });

  document.getElementById("cart-total").innerText = `Total: $${total}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
}
