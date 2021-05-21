const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    timestamp: Date,
    nombre: String,
    descripcion: String,
    codigo: Number,
    foto: String,
    precio: Number,
    stock: Number  
});

productoSchema.statics.createInstance = function(nombre, descripcion, codigo, foto, precio, stock)
{
    return new this({
        timestamp: Date.now(),
        nombre: nombre,
        descripcion: descripcion,
        codigo: codigo,
        foto: foto,
        precio: precio,
        stock: stock
    });
}

productoSchema.statics.encontrarProductoPorId = function(_id, cb) 
{ 
    this.findOne({_id: _id}, cb);
}

productoSchema.statics.listarProductos = function(cb) 
{
    return this.find({}, cb);
}

productoSchema.statics.agregarProducto = function(producto, cb) 
{   
    this.create(producto, cb);
}

productoSchema.statics.borrarProducto = function(_id, cb) 
{
    return this.deleteOne({_id: _id}, cb);
}


module.exports = mongoose.model("productos", productoSchema);