const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mensajeSchema = new Schema({
    email: String,
    fecha: Date,
    mensaje: String
});

mensajeSchema.statics.createInstance = function(email, mensaje)
{
    return new this({
        email: email,
        fecha: Date.now(),
        mensaje: mensaje
    })
}

mensajeSchema.statics.agregarMensaje = function(mensaje, cb)
{
    this.create(mensaje, cb);
}

mensajeSchema.statics.mostrarMensajes = function(cb) 
{
    return this.find({}, cb);
}

module.exports = mongoose.model("mensajes", mensajeSchema);