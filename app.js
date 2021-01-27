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

const btnScrollTo = document.querySelector('.btn-scroll-to');
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
const productsContainer = document.querySelector('.products-container');

// ////////////////////////////////////
// smooth scrolling

// for button
btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  sectionProducts.scrollIntoView({ behavior: 'smooth' });
});

// page navigation

//  navbar
navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//  sidebar
const sidebarToggle = function () {
  sidebar.classList.toggle('sidebar-open');
};
sidebarBtnOpen.addEventListener('click', sidebarToggle);
sidebarBtnClose.addEventListener('click', sidebarToggle);
sidebarLinks.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('sidebar-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
  sidebarToggle();
});
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

//Products

window.addEventListener('DOMContentLoaded', function () {
  let displayProducts = products.map(function (item) {
    return `<div class="single-product-container">
            <div class="product-img-container">
              <img
                src=${item.img}
                alt="${item.title}"
                class="product-img"
              />
            </div>
            <div class="product-info">
              <h4>${item.title}</h4>
              <h4>${item.price}€</h4>
              <p>
                ${item.desc}
              </p>
            </div>
            // <a href="products.html?item_number=${item.id}#products"  class="btn product-btn"
            >zisti viac</a
          >
          </div>`;
  });

  displayProducts = displayProducts.join('');
  productsContainer.innerHTML = displayProducts;
});
