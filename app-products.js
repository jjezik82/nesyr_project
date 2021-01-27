'use strict';
// products

const products = [
  {
    id: 1,
    title: 'mozzarella',
    price: 5,
    img: './pictures/item-1.jpg',
    ingredients: './pictures/ing-1.PNG',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque a quam blanditiis cumque qui sapiente?`,
    info: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              reiciendis assumenda dignissimos voluptate natus eos harum
              officiis non neque sunt. Quasi repudiandae, reprehenderit eos
              perspiciatis illo esse animi, reiciendis non, ab nostrum adipisci
              dolores omnis voluptatem quo corrupti voluptas nobis excepturi
              magni beatae. Nesciunt placeat omnis cum perferendis, magni
              similique!`,
  },
  {
    id: 2,
    title: 'gouda',
    price: 5.5,
    img: './pictures/item-2.jpg',
    ingredients: './pictures/ing-2.PNG',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque a quam blanditiis cumque qui sapiente?`,
    info: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              reiciendis assumenda dignissimos voluptate natus eos harum
              officiis non neque sunt. Quasi repudiandae, reprehenderit eos
              perspiciatis illo esse animi, reiciendis non, ab nostrum adipisci
              dolores omnis voluptatem quo corrupti voluptas nobis excepturi
              magni beatae. Nesciunt placeat omnis cum perferendis, magni
              similique!`,
  },
  {
    id: 3,
    title: 'brie',
    price: 6,
    img: './pictures/item-3.jpg',
    ingredients: './pictures/ing-3.PNG',
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque a quam blanditiis cumque qui sapiente?`,
    info: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              reiciendis assumenda dignissimos voluptate natus eos harum
              officiis non neque sunt. Quasi repudiandae, reprehenderit eos
              perspiciatis illo esse animi, reiciendis non, ab nostrum adipisci
              dolores omnis voluptatem quo corrupti voluptas nobis excepturi
              magni beatae. Nesciunt placeat omnis cum perferendis, magni
              similique!`,
  },
];

// variables

const sectionProducts = document.getElementById('products');
const navLink = document.querySelectorAll('.nav-link');
const navLinks = document.querySelector('.nav-links');
const navLinksContainer = document.querySelector('.nav-links-container');
const sidebarBtnOpen = document.getElementById('toggle-open');
const sidebarBtnClose = document.getElementById('toggle-close');
const sidebarLink = document.querySelectorAll('.sidebar-link');
const sidebarLinks = document.querySelector('.sidebar-links');
const sidebarContainer = document.querySelector('.sidebar-container');
const sidebar = document.querySelector('.sidebar');
const headerBar = document.querySelector('.header-bar');
const productContainer = document.getElementById('product-container');
const myUrl = new URL(window.location.href);
// ////////////////////////////////////
// smooth scrolling

// page navigation

//  navbar

//  sidebar
const sidebarToggle = function () {
  sidebar.classList.toggle('sidebar-open');
};
sidebarBtnOpen.addEventListener('click', sidebarToggle);
sidebarBtnClose.addEventListener('click', sidebarToggle);

// Sticky navbar

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navLinksContainer.classList.add('nav-sticky');
  else navLinksContainer.classList.remove('nav-sticky');
};

const headerLogoObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});
headerLogoObserver.observe(headerBar);

// Product display

const productID = myUrl.search.slice(-1);

let findProduct = products.find((item) => item.id === Number(productID));

const transformProduct = [];
transformProduct.push(findProduct);

window.addEventListener('DOMContentLoaded', function () {
  let displayProduct = transformProduct.map(function (item) {
    return `<div class="section-title">
          <h2>vegan ${item.title}</h2>
          <div class="section-title-underscore"></div>
        </div>
        <!-- end of section title -->
        <!-- products -->
        <div class="product-page-container">
          <div class="product-page-img-container">
            <img
              src=${item.ingredients}
              alt="${item.title}"
              class="product-page-img"
            />
          </div>

          <div class="product-page-info">
            <h4>${item.title}</h4>
            <h4>${item.price}€</h4>
            <p>${item.info}</p>
            
          </div>
          <a href="index.html#products" class="btn about-btn">naspäť</a>
        </div>`;
  });
  displayProduct = displayProduct.join('');

  productContainer.innerHTML = displayProduct;
});
