import http from 'http'
const PORT = 8000;
import { headers } from "./util/helpers.mjs";

// Import our pages
import home from "./pages/home.mjs";

(async () => {
    http.createServer(
        (request, response) => {
            let error;

            if (request.url=="/") {
                headers(home, response)
            } 
            else {
                response.end(`Error ${error}`)
            }
        }
    ).listen(PORT);
    console.log(`Listening on port: ${PORT}`);
})();