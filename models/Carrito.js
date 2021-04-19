const functions = require('../utils/functionsCarrito');

class Carrito 
{
    constructor(producto)
    {
        this.id = functions.getProductosCarrito().length+1,
        this.timestamp = Date.now(),
        this.producto = producto
    }

    static listarProductos()
    {
        return functions.getProductosCarrito();
    }

    static mostrarProducto(id)
    {
        return functions.getProductoCarrito(id);
    }

    static agregarProducto(producto)
    {
        functions.addProductoCarrito(producto);
    }

    static borrarProducto(id)
    {
        return functions.deleteProductoCarrito(id);
    }   
}

module.exports = Carrito;