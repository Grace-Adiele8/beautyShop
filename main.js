const topBarClose = document.getElementById("topbar__close");
const topBar = document.querySelector(".topbar");
const toggleMenu = document.getElementById("toggle-menu");
const navBar = document.querySelector(".navbar__content");
const clickCatcher = document.getElementById("body-click-catcher");
const links = document.querySelectorAll(".nav_link");
const cartAmount = document.getElementById("cartAmount");
const addToCart = document.getElementById("add-to-cart");
// const product = document.querySelectorAll(".product");
const bestSellers = document.getElementById("bestseller");

let products = [
  {
    id: 1,
    name: "Test Product",
    img: "images/product-1.jpg",
    price: 35.9,
  },

  {
    id: 2,
    name: "Test Product",
    img: "images/product-2.jpg",
    price: 35.9,
  },

  {
    id: 3,
    name: "Test Product",
    img: "images/product-3.jpg",
    price: 35.9,
  },

  {
    id: 4,
    name: "Test Product",
    img: "images/product-4.jpg",
    price: 35.9,
  },

  {
    id: 5,
    name: "Test Product",
    img: "images/product-5.jpg",
    price: 35.9,
  },

  {
    id: 6,
    name: "Test Product",
    img: "images/product-6.jpg",
    price: 35.9,
  },

  {
    id: 7,
    name: "Test Product",
    img: "images/product-7.jpg",
    price: 35.9,
  },

  {
    id: 8,
    name: "Test Product",
    img: "images/product-8.jpg",
    price: 35.9,
  },
];

let cart = [];

// function increaseCart(productId) {
//   const item = products.find((product) => product.id === productId);
//   cart.push(item);
//   cartAmount.innerText = cart.length;
// }

Window.increaseCart = (productId) => {
  console.log(productId);
  const item = products.find((product) => product.id === productId);
  cart.push(item);
  cartAmount.innerText = cart.length;
};

let html = "";
// document.addEventListener("DOMContentLoaded", () => {
for (let product of products) {
  html += `
    <div class="product">
      <img src=${product.img} alt="product" class="product__img" />
      <div class="product__actions">
        <i class="bx bx-heart"></i>
        <i class="bx bx-zoom-in"></i>
      </div>
      <div class="product__info">
        <h4 class="product__title">${product.name}</h4>
        <button href="#" class="btn add-to-cart" id="add-to-cart" onClick="increaseCart(${product.id})">
        
          + Add To Cart
        </button>
        <div class="product__rating">
          <i class="bx bx-star"></i>
          <i class="bx bx-star"></i>
          <i class="bx bx-star"></i>
          <i class="bx bx-star"></i>
          <i class="bx bx-star"></i>
        </div>
        <div class="product__price">
          <span class="product__price--before">${product.price}</span>
          $35.90
        </div>
      </div>
    </div>
    `;
}

bestSellers.innerHTML = html;
// });

topBarClose.addEventListener("click", () => {
  topBar.classList.add("hide");
});

toggleMenu.addEventListener("click", () => {
  navBar.classList.add("show");
  clickCatcher.style.display = "block";
  document.body.style.overflow = "hidden";
});

function closeMenu() {
  navBar.classList.remove("show");
  clickCatcher.style.display = "none";
  document.body.style.overflow = "auto";
}

clickCatcher.addEventListener("click", closeMenu);
// close on link clicks
links.forEach((link) => link.addEventListener("click", closeMenu));
closeMenu();

// addToCart.addEventListener("click", increaseCart);
