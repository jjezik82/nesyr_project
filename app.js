'use strict';
// products

const products = [
  {
    id: 1,
    title: 'nemozzarella',
    price: 5,
    img: './pictures/item-1.jpg',
    ingredients: './pictures/ing-1.PNG',
    desc: `neutrálna chuť	- na varenie -	párovať s paradajkou`,
    info: `Naša ľahká, jemne kyselkavá nemozzarellka pozdvihne každé jedlo na vyššiu úroveň. Je skvelá na varenie, pretože sa krásne rozpúšťa. Odporúčame ju postrúhať na pizzu, či cestoviny alebo použiť ako náplň do slaného pečiva. Čerstvá je najlepšia nakrájaná na kocky v šalátoch alebo na tenšie plátky s paradajkou a bazalkou, poliata olivovým olejom ako vegánske caprese.`,
  },
  {
    id: 2,
    title: 'negouda',
    price: 5.5,
    img: './pictures/item-2.jpg',
    ingredients: './pictures/ing-2.PNG',
    desc: `výrazná údená chuť -	jemná textúra -	párovať s jablkom`,
    info: `Delikátna negouda s údenou príchuťou sa vyníma na sendvičoch s rukolou a jablkovým chutney. Taktiež aj na cestovinový pokrmoch ako napríklad lasagne, primiešaná do bešamelovej omáčky. Varená, pečená či len tak natretá na krekroch je jednou z našich najobľúbenejších príchutí.`,
  },
  {
    id: 3,
    title: 'nebrie',
    price: 6,
    img: './pictures/item-3.jpg',
    ingredients: './pictures/ing-3.PNG',
    desc: `lahodná chuť -	krémová textúra - párovať s hroznom`,
    info: `Náš signature neSYR typu brie si zamiluje naozaj každý. Jeho lahodná a krémová chuť je unikátna a nezameniteľná. Nebrie vzniká dlhým procesom dozrievania v miskách ako syrová zmes, neskôr v syrových formách a následne odpočíva po soľnom kúpeli na vzduchu 3-5 dní, čím si vytvorí chuťový charakter a tenkú kôrku. Uprostred je jemný a roztierateľný. Použitie už necháme na Vašej kreativite.`,
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
              
              <p>
                ${item.desc}
              </p>
            </div>
            <a href="products.html?item_number=${item.id}#products"  class="btn product-btn"
            >zisti viac</a
          >
          </div>`;
  });

  displayProducts = displayProducts.join('');
  productsContainer.innerHTML = displayProducts;
});
