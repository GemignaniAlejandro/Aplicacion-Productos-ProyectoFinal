const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carritoSchema = new Schema({
    timestamp: Date,
    producto: [{type: mongoose.Schema.Types.ObjectId, ref: "productos"}]
});

carritoSchema.statics.agregarProducto = (producto, cb) => 
{
    this.create(producto, cb);
}

carritoSchema.statics.listarProductos = (cb) => 
{
    return this.find({}, cb);
}

carritoSchema.statics.mostrarProducto = (_id, cb) => 
{
    return this.findOne({_id: _id}, cb);
}

carritoSchema.statics.borrarProducto = (_id, cb) => 
{
    return this.deleteOne({_id: _id}, cb);
}



module.exports = mongoose.model("carrito", carritoSchema);