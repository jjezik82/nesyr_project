'use strict';

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
const productsContainer = document.querySelector('.products-container');

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

// /////////////////////
// Date

const year = new Date();
const fullYear = year.getFullYear();

date.innerHTML = fullYear;
