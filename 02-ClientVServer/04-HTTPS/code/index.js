const fs = require('fs');
const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');
const PORT = 303;
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
