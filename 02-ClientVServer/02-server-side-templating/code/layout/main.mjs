import http from 'http';

// <title>Bootstrap Site</title>
export const HTML = (header,body) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${header}
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
  </head>
  <body>
  ${body}

  </body>
  </html>`;
}

// export const writeHeader = () => {
//   if (request.url == '/') {
//     // read a file and 
//     fs.readFile('${1:index}', function(err, data) {
//       response.writeHead(200, {'Content-Type': 'text/${2:html}'});
//       response.write(data);
//       return response.end();
//     });
//   }
// }


/**
 * @export
 * @param {string} [route="/"]
 * @param {number} [port=8000]
 * @param {*} HTML - is a callback that returns an html string
 */
export default function Server(route = "/", port=8000, template )  {
  //
  http.createServer(
    (request, response)=>{
      if(request.url == route){
        response.writeHead(200,{
          'Content-Type': 'text/html',
          'Content-Length': template.length,
          'Expires': new Date().toUTCString()
        })
        response.end(template)
      }
      else{
        // writeHTML()
        response.end("nope")
      }
    }
  ).listen(port);
  //
};
