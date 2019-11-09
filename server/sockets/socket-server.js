const {io} = require('../server')


io.on('connection', client => {

    console.log('Usuario conectado');


    //Emitir msj
    client.emit('enviarMsj', {
        usuario: 'Administrador',
        mensaje: ' Bienvenido al chat'
    })


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log('Mensaje', data);

        client.broadcast.emit('enviarMensaje', data);
        
        // if (msj.usuario) {
        //     callback({
        //         resp: 'Todo Salio bien'
        //     })
        // } else {
        //     callback({
        //         resp: 'Todo Salio mal'
        //     })
        // }

    })

})