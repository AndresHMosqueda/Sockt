let socket = io();

//Escuchar
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Desconexion al servidor');
});


// Enviar info
socket.emit('enviarMensaje', {
    usuario: 'Andres',
    mensaje: 'Hola And'
}, (resp) => {
    console.log('Respuesta Server: ', resp);

})

//Escuchar info
socket.on('enviarMsj', (msj) => {
    console.log('Servidor:', msj);

})