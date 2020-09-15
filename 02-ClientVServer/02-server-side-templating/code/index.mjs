import http from 'http'
import fetch from 'node-fetch'
const PORT = 8000;
import { headers } from "./util/helpers.mjs";

// Import our pages
import home from "./pages/home.mjs";
import {dataCard, Masonary} from "./pages/about.mjs";
import { NAV } from "./components/nav.mjs";

(async () => {
    http.createServer(
        async (request, response) => {
            const cards = await dataCard("https://www.breakingbadapi.com/api/characters/");
            const about =  await Masonary(NAV,cards);
            Promise.resolve(about)
            let error;
            switch(request.url) {
                case "/":
                    headers(home, response)
                  break;
                case "/about":
                    await headers(about, response)
                  break;
                default:
                    response.end(`Error ${error}`)
            }
        }
    ).listen(PORT);
    console.log(`Listening on port: ${PORT}`);
})();