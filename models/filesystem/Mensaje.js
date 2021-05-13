const functions = require('../../utils/functionsMensajes');

class Mensaje
{
    constructor(email, fecha, mensaje)
    {
        this.email = email,
        this.fecha = fecha,
        this.mensaje = mensaje
    }

    static mostrarMensajes()
    {
        return functions.getMensajes();
    }

    static agregarMensaje(mensaje)
    {
        functions.addMensaje(mensaje);
    }
}

module.exports = Mensaje;