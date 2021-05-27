let Mensaje = require("../models/mongodb/Mensaje");

let agregar_mensaje = (req, res) => 
{
    let email = req.body.email;
    let fecha = req.body.fecha;
    let mensaje = req.body.mensaje;
    
    let datosMensaje = Mensaje.createInstance(email, fecha ,mensaje);
    
    Mensaje.agregarMensaje(datosMensaje, function(err, newMensaje){
        console.log(newMensaje);
        res.redirect(BASE_URL);
    });
    
}

let mostrar_mensajes = (req, res) =>
{
    Mensaje.mostrarMensajes(function(err, mensajes){
        res.json(mensajes);
    });
}

module.exports = {agregar_mensaje, mostrar_mensajes };