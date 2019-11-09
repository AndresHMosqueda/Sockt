const express = require('express');
const socketIO = require('socket.io');
const http = require('http'); //nos permite levante un servidor, etc

const app = express();
//Definir el servidor
let server = http.createServer(app); // de esta manera ya tenemos montado el servidor con la config que vamos a hacerle a express

const path = require('path');
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket-server');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${port}`);

});