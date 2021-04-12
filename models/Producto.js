const functions = require('../utils/functionsProductos');

class Producto 
{
    constructor(/*timestamp, nombre, descripcion, codigo, foto, precio, stock*/nombre, descripcion)
    {
            /*
            
            codigo: codigo,
            foto: foto,
            precio: precio,
            stock: stock*/
            this.id = functions.getProductos().length+1,
            this.timestamp = Date.now();
            this.nombre = nombre,
            this.descripcion = descripcion
        
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