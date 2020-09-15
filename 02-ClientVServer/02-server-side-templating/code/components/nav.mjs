// Navbar Function to build a dynamic navbar on the server


// NavLinks Server-Side Component
// used to create links to each page, 
// homepages= [ {links:"home"},{links:"about"}]
// Example of how to use it
// let links = NavLinks(homepages)
export const NavLinks = (data) => {
  return data.map(links => `
    <li class="nav-item">
      <a class="nav-link" href="#">${links.name}</a>
    </li>
  `).join('');
};



/*
* Example
* create links for each page
* let links = NavLinks(homepages)
* pass that into the 'content' arguement and returns your final menu
* Nav(links)                     
*/
export const Nav = (content, logo="https://hansmcmurdy.com/JavaScript-First/logo.svg") => {
  return `
  <div class="collapse" id="JSFirst">
    <div class="bg-dark p-4">
      <h5 class="text-white h4"> #JavaScriptFirst is an online Book </h5>
      <span class="text-muted">
      Learn more about the book here: <a class="" href="hansmcmurdy.com/JavaScript-First">
      #JavaScriptFirst
      </a>
      </span>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" type="button" data-toggle="collapse" data-target="#JSFirst" aria-controls="JSFirst" aria-expanded="false" aria-label="Toggle navigation">
      <img src=${logo} width="30" height="30" alt="" loading="lazy">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        ${content}
      </div>
    </div>
  </div>
</nav>`;
};



const bottomNav = (content) => `<nav class="navbar fixed-bottom navbar-expand-sm navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav row">
        <li class="col-10"></li>
        <li class="nav-item dropup col-2">
          <a class="nav-link dropdown-toggle" href="#" id="dropdown10" data-toggle="dropdown" aria-expanded="false">Contact</a>
          <ul class="dropdown-menu" aria-labelledby="dropdown10">
            <li><a class="dropdown-item" href="#">Call</a></li>
            <li><a class="dropdown-item" href="#">Directions</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>`;


// export const mobileNav = bottomNav(links);

import {homepages} from "../routes.mjs";
// export const homepages = [
//   {
//       name: 'Home',
//       url: "/",
//       icon: "",
//       data: "",
//   },
//   {
//       name: 'About',
//       url: "/about",
//       icon: "fa-user",
//       data: "",
//   },
//   {
//       name: 'Portfolio',
//       url: "/Portfolio",
//       icon: "fa-th",
//       data: "",
//   }
// ];
const links = NavLinks(homepages)
export const NAV = Nav(links)