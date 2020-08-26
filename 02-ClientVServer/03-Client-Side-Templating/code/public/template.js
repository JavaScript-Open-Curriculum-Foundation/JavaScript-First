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




const {name} = resume.basics;

// get data by destructing
var [...skills] = resume.skills;
var [...certs] = resume.certifications;

// console.log(certs[0].title);








/**
* Experiance
*/
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
* Skills
*/
const _skillsSelector = document.querySelector(".sidebar");
const aboutIMG = "https://www.w3schools.com/w3images/avatar_hat.jpg";
const _skillMap = skills.map(skills => `
  <p class="w3-wide">${skills.name}</p>
  <div class="w3-light-grey">
    <div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:${skills.level}%">${skills.level}%</div>
  </div>
`).join('');
const skillsMarkup= `
<div class="">
  <h2>Skills</h2>
  <ul class="">
    ${_skillMap}
  </ul>
</div>
`;



/**
* About
*/







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

/**
 * Get data from the starwars API
 * https://swapi.co/documentation#javascript
 */
const API = "https://swapi.co/api/people";
const get_data = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    /**
     * @example Response Data
     * @description returns as object with an result as an array lf objects
     * {count: 87,
        next: 'https://swapi.co/api/people/?page=2',
        previous: null,
        results: [
          { 
                name: 'Luke Skywalker',
                gender: 'male',
                homeworld: 'https://swapi.co/api/planets/1/',
                films: [Array],
                species: [Array],
                vehicles: [Array],
                starships: [Array],
                created: '2014-12-09T13:50:51.644000Z',
                edited: '2014-12-20T21:17:56.891000Z',
                url: 'https://swapi.co/api/people/1/' 
            },
            {},
            {}
        ]}
    *
    */

    /**
     * Filter the data
     * 1. find all the men
     * 2. find all people who have been in more than 3 movies
     */
    const men = json.results.filter(find => find.gender === 'male');
    const findCelebrity = json.results.filter(find => find.films.length >= 3);
    [...films]=findCelebrity.films;
    console.log(films);

    const _heroSelector = document.querySelector(".hero");

    /*
        <script>
        ${XSS}
        <script>
    */
    const _films = findCelebrity.map(links => `
      <a href="#" class="${_navClasses}">${links.name}</a>
    `).join('');
    console.log(_films);
    
    const aboutMarkup = `
        <div class="w3-content w3-container w3-padding-64" id="about">

          ${XSS}

          <h3 class="w3-center">ABOUT ME</h3>
          <p class="w3-center"><em>I love photography</em></p>
          <p>
              We have created a fictional "personal" website/blog, 
              and our fictional character is a hobby photographer. 
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, 
              sunt in culpaqui officia deserunt mollit anim id est laborum consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div class="w3-row">
            <div class="w3-col m6 w3-center w3-padding-large">
              <p><b><i class="fa fa-user w3-margin-right"></i>My Name</b></p><br>
              <img src="${aboutIMG}" class="w3-round w3-image w3-opacity w3-hover-opacity-off" 
               alt="Photo of Me" width="500" height="333">
            </div>

            <div class="w3-col m6 w3-hide-small w3-padding-large">
              <p>
                  Welcome to my website. 
                  I am lorem ipsum consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit 
                  esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          </div>
        </div>
      `;
      _heroSelector.innerHTML = aboutMarkup;
    
  } catch (error) {
    console.log(error);
  }
};
get_data(API);
