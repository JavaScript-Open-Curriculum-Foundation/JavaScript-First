/**
 * @export
 * @param {string} [route="/"]
 * @param {number} [port=8000]
 * @param {*} HTML - is a callback that returns an html string
 */
const Server = (home = "/", port=8000, template, pages=false )  =>{
    http.createServer(
        (request, response)=>{
        req = this.request;
        if(request.url == home){
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
  
  
export const headers = (data,response) => {
  response.writeHead(200,{
  'Content-Type': 'text/html',
  'Content-Length': data.length,
  'Expires': new Date().toUTCString()
  })
  response.end(data)
}

