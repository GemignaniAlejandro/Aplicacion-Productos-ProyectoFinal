let Mensaje = require("../models/filesystem/Mensaje");

let agregar_mensaje = (req, res) => 
{
    let email = req.body.email;
    let fecha = req.body.fecha;
    let mensaje = req.body.mensaje;
    let datosMensaje = new Mensaje(email, fecha, mensaje) 
    Mensaje.agregarMensaje(datosMensaje);
    res.json(datosMensaje);
}

let mostrar_mensajes = (req, res) =>
{
    let mensajes = Mensaje.mostrarMensajes();
    res.json(mensajes);
}

module.exports = {agregar_mensaje, mostrar_mensajes };