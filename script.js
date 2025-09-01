// Example products
const products = [
  { id: 1, name: "iPhone 14 Pro", price: 1200, img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-1-202209?wid=512&hei=512&fmt=jpeg&qlt=95&.v=1660753619946" },
  { id: 2, name: "MacBook Air M2", price: 1500, img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=512&hei=512&fmt=jpeg&qlt=95&.v=1653084303665" },
  { id: 3, name: "iPhone 13", price: 900, img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-green-select-202203?wid=512&hei=512&fmt=jpeg&qlt=95&.v=1644969385495" },
  { id: 4, name: "Dell XPS 13", price: 1300, img: "https://i.dell.com/sites/csimages/Merchandizing_Imagery/all/xps-13-9310-laptop-pdp-polaris-gallery-504x350-ng.psd" }
];

// Load products
const productList = document.getElementById("product-list");
products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${p.img}" width="150" />
    <h3>${p.name}</h3>
    <p>$${p.price}</p>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
  `;
  productList.appendChild(div);
});

// Cart logic
let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}
