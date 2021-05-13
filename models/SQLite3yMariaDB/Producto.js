const functions = require('../../utils/SQL/functionsProductos');

class Producto 
{
    constructor(nombre, descripcion, codigo, foto, precio, stock)
    {
            this.id = functions.getProductos().length+1,
            this.timestamp = Date.now(),
            this.nombre = nombre,
            this.descripcion = descripcion
            this.codigo = codigo,
            this.foto = foto,
            this.precio = precio, 
            this.stock = stock     
    }
    
    static listarProductos()
    {
        return functions.getProductos();
    }

    static mostrarProducto(id)
    {
        return functions.getProducto(id);
    }

    static agregarProducto(producto)
    {  
        functions.addProducto(producto);
    }
    
    static actualizarProducto(id, producto)
    {
        return functions.updateProducto(id, producto);
    }
    
    static borrarProducto(id)
    {
        return functions.deleteProducto(id);
    }
}

module.exports = Producto;