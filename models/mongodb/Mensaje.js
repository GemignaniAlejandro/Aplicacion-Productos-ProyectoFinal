const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mensajeSchema = new Schema({
    email: String,
    fecha: Date,
    mensaje: String
});

mensajeSchema.statics.agregarMensaje = (mensaje, cb) =>
{
    this.create(mensaje, cb);
}

mensajeSchema.statics.mostrarMensajes = (cb) => 
{
    return this.find({}, cb);
}

module.exports = mongoose.model("mensajes", mensajeSchema);