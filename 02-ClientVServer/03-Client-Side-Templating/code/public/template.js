import { resume } from "./resume.js";
const {name} = resume.basics;
var [...skills] = resume.skills;
var [...certs] = resume.certifications;
// console.log(certs[0].title);



var XSS = "";
// XSS = alert("XSS hack");

/**
 * Resume Data fron: https://jsonresume.org/schema/
 */
const navLinks = [
    { 
      name: 'Home', 
      url: "/",
      icon: ""
    },
    { 
      name: 'About', 
      url: "/",
      icon: "fa-user"
    },
    { 
      name: 'Portfolio', 
      url: "/",
      icon: "fa-th"
    },
    { 
      name: 'Contact',
      url: "/",
      icon: "fa-envelope"
    }
];










/**
* Experiance
*/
const exp = [
  {
    name: "Partners",
    value: 6
  },
  {
    name: "Projects",
    value: 120
  },
  {
    name: "Clients",
    value: 100
  },
  {
    name: "Meetings",
    value: 200
  }
];
const _expSelector = document.querySelector(".content");
const _expMap = exp.map(exp => `
  <div class="w3-quarter w3-section">
    <span class="w3-xlarge">${exp.value}+</span><br>
    ${exp.name} 
  </div>
`).join('');
const experianceMarkup = `
<div class="w3-row w3-center w3-dark-grey w3-padding-16">
  ${_expMap}
</div>
`;








/**
* Certs Component
*/
  const _certSelector = document.querySelector(".sidebar2");
  const _certMap = certs.map(certs => `
      <div class="">
        <h2>${certs.title}</h2>
        <li>${certs.date}</li>
        <li>${certs.awarder}</li>
        <li>${certs.summary}</li>
      </div>
  `).join('');
  const certMarkup= `
    <div class="" >
      <h2>Certifications</h2>
      <ul class="">
        ${_certMap}
      </ul>
    </div>
  `;



/**
 * Nav Component
 */
const _navSelector = document.querySelector(".header");
const _navClasses = "w3-bar-item w3-button";
const _navLink = navLinks.map(links => `
  <a href="#" class="${_navClasses}">
    <i class="fa ${links.icon}"></i>
    ${links.name}
  </a>
`).join('');

const _navLinkBottom = navLinks.map(links => `
  <a href="#" class="${_navClasses}">${links.name}</a>
`).join('');


const fancyNav = `
<div class="w3-top">
  <div class="w3-bar w3-card w3-animate-top w3-white" id="myNavbar">
    <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
      <i class="fa fa-bars"></i>
    </a>
    <div class="w3-hide-small"> ${_navLink}</div>
    <a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
      <i class="fa fa-search"></i>
    </a>
  </div>

  <!-- Navbar on small screens -->
  <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
    ${_navLink}
  </div>
</div>
`;


const nav = `
  <div class="w3-bar w3-red">
    ${_navLink}
    <a href="javascript:void(0)" class="${_navClasses} w3-right w3-hide-large w3-hide-medium" >&#9776;</a>
  </div>

  <div id="demo" class="w3-bar-block w3-red w3-hide w3-hide-large w3-hide-medium">
    ${_navLinkBottom}
  </div>
`;
_navSelector.innerHTML = fancyNav;



/*
* Render everything
*/
_expSelector.innerHTML = experianceMarkup;
_skillsSelector.innerHTML = skillsMarkup;
_certSelector.innerHTML = certMarkup;






function _myNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

/*
* Events
*/
// window.onscroll = function() {scrollFunction()};
_navSelector.addEventListener("click", _myNav);

