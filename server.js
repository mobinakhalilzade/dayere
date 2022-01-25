const express = require('express')
const http = require('http')
const path = require('path')

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/dist/dayere-web'));

app.get((req, res) => res.sendFile(Path.join(__dirname)));

const server = http.createServer(app);

server.listen(port , () =>console.log('runnig ....'))

