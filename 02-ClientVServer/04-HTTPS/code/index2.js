// https://stackoverflow.com/questions/46867517/how-to-read-file-with-async-await-properly/46867579
const fs = require('fs');
async function readAsyncFile() {
    const data = await fs.readFile(file, "binary");
    return new Buffer(data);
}
// const key  = readAsyncFile('./key.pem')
// const cert = readAsyncFile('./cert.pem')

const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');



const PORT = 8080;
const https = require('https');
const express = require('express');
const app = express();

const server = https.createServer(
  {key: key, cert: cert },
app);

app.get('/', (req, res) => { 
  res.send('this is an secure server')
});

server.listen(PORT, () => { 
  console.log(`listening on ${PORT}`) 
});
