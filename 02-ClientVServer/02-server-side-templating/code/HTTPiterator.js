

const HTML = (error="unexpected") => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ERROR</title>
  </head>
  <body>
    ${error}
  </body>
  </html>`;
}

const writeHTML = (HTML) => {
  response.writeHead(200,{
    'Content-Type': 'text/html',
    'Content-Length': HTML.length,
    'Expires': new Date().toUTCString()
  })
}


const server = (route = "/", port ) => {
    //
    http.createServer(
      (request, response)=>{
        if(request.url == route){
          writeHTML(HTML)
          response.end(HOME)
        }
        else{
          writeHTML(HTML)
          response.end(HTML)
        }
      }
    ).listen(port);
    //
}


server("/")
