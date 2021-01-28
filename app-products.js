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
          <div class="product-page-info-container">
          <div class="product-page-info">
            <h4>${item.title}</h4>
            
            <p>${item.info}</p>
            
            </div>
            <a href="index.html#products" class="btn about-btn">naspäť</a>
            </div>
        </div>`;
  });
  displayProduct = displayProduct.join('');

  productContainer.innerHTML = displayProduct;
});
