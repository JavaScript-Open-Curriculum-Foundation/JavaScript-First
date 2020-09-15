// import {masonary} from "../layout/masonary.js";
import { NAV } from "../components/nav.mjs";
import fetch from 'node-fetch'
let about;

export const Masonary = (nav,body) => { 
    return `
    <!doctype html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
        <meta name="generator" content="Hugo 0.72.0">
        <title>Masonry example · Bootstrap</title>
    
        <link rel="canonical" href="https://v5.getbootstrap.com/docs/5.0/examples/masonry/">
    
        <!-- Bootstrap core CSS -->
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
            integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
            integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
            crossorigin="anonymous"></script>

        <meta name="theme-color" content="#7952b3">
    
    
        <style>
            .bd-placeholder-img {
                font-size: 1.125rem;
                text-anchor: middle;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
    
            @media (min-width: 768px) {
                .bd-placeholder-img-lg {
                    font-size: 3.5rem;
                }
            }
        </style>
    
    
    </head>
    
    <body>
        ${nav}
        <div class="container py-5">
            <div class="row" data-masonry='{"percentPosition": true }'>
                ${body}
            </div>
        </div>
    
    
    
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/masonry/4.2.2/masonry.pkgd.min.js"
            integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`;
}

export const dataCard = async (URL) => {
    let final;
    try {
        // const data = await (await fetch(url)).json()
        const data = await fetch(URL);
        const json = await data.json();
        
        final = await json.map((data) => ` <div class="col-sm-6 col-lg-4 mb-4">
        <div class="card">
        <img src="${data.img}" class="card-img-top" alt="${data.name}">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96" /><text x="50%" y="50%" fill="#dee2e6"
        dy=".3em">Image cap</text>
        </svg>
        
        <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${data.occupation}</p>
        </div>
        </div>
        </div>`
        ).join(' ');
        return Promise.resolve(final)
    } catch (error) {
        Promise.reject(error)
        console.log(error)
    }
    return final;
    // console.log(final);
}

 
// export const about = Masonary(NAV, dataCard("https://www.breakingbadapi.com/api/characters/"));
// const about = "ho";
// export default about;
export default about ;