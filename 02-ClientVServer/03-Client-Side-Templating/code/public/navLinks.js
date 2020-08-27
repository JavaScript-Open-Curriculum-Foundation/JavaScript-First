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
 * Nav Component
 */
const _navSelector = document.querySelector(".header");
const _navClasses = "w3-bar-item w3-button";

// Generate Links
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


// Render the final HTML
_navSelector.innerHTML = fancyNav;
