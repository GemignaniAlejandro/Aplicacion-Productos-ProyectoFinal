const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carritoSchema = new Schema({
    timestamp: Date,
    productos: [{}]
});

carritoSchema.statics.createInstance = function(producto)
{
    return new this({
        timestamp: Date.now(),
        productos: producto
    });
}

carritoSchema.statics.crearCarrito = function(producto, cb)
{
    this.create(producto, cb);
}

carritoSchema.statics.agregarProductoAlCarrito = function(producto) 
{
    this.updateMany({}, {$push:{productos: producto}});
}

carritoSchema.statics.listarCarritos = function(cb){
    return this.find({}, cb);
}

carritoSchema.statics.encontrarCarritoPorId = function(_id, cb) 
{
    return this.findOne({_id: _id}, cb);
}

carritoSchema.statics.borrarProducto = function(_id, cb) 
{
    return this.deleteOne({_id: _id}, cb);
}



module.exports = mongoose.model("carritos", carritoSchema);