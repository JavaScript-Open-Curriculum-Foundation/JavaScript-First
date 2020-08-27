/**
 * Get data from the starwars API
 * https://swapi.co/documentation#javascript
 */
const API = "https://swapi.co/api/people";

const get_data = async (https://swapi.co/api/people) => {
  try {
    // const response = await fetch(url,
    //   mode: 'no-cors',
    //   header: {
    //     'Access-Control-Allow-Origin':'*',
    //   }
    // );
    fetch(`${url}`, {
      mode: 'no-cors',
      header: {
        'Access-Control-Allow-Origin':'*',
      }
    }); 
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
