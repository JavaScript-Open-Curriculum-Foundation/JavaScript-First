// export default nav = (logo="https://hansmcmurdy.com/JavaScript-First/logo.svg") => {
// }




export const Nav = (content, logo="https://hansmcmurdy.com/JavaScript-First/logo.svg") => {
  return `
  <div class="collapse" id="JSFirst">
    <div class="bg-dark p-4">
      <h5 class="text-white h4"> #JavaScriptFirst is an online Book </h5>
      <span class="text-muted">
      Learn more about the book here: <a class="" href="https://hansmcmurdy.com/JavaScript-First/">#JavaScriptFirst</a>
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

  
// `<nav class="navbar navbar-expand-lg navbar-light bg-light">
// <div class="container-fluid">
  // <a class="navbar-brand" href="#">
  // <img src=${logo} width="30" height="30" alt="" loading="lazy">
  // </a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="#navbarNavAltMarkup"  aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="#navbarNavAltMarkup">
//     <div class="navbar-nav">
//       ${content}
//     </div>
//   </div>
// </div>
// </nav>`;


export const NavLinks = (data) => {
  return data.map(links => `
    <li class="nav-item">
      <a class="nav-link" href="#">${links.name}</a>
    </li>
  `).join('');
};

// For Demo purposes
export const homepages = [
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