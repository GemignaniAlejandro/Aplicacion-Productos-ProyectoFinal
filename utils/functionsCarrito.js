const fs = require('fs');
const CARRITO = process.env.ARCHIVO_CARRITO;

let getProductosCarrito = () =>
{
    let arrayProductos = [];
    try
    {
        let productos = fs.readFileSync(CARRITO, "utf-8");
        
        arrayProductos = productos.split(",\r\n");
        
        arrayProductos.splice(arrayProductos.length - 1, 1);
        
        return arrayProductos.map((producto) => JSON.parse(producto));    
    }
    catch(error)
    {
        return {error: `error: ${error}`};
    }
}

let getProductoCarrito = (id) =>
{
    let productos = getProductosCarrito();
    let productoSeleccionado = productos.filter((producto) =>{
        return producto.id == id;
    });
    if(productoSeleccionado.length<1)
    {
        return {error: `No existe un producto con la id: ${id}`};
    }
    else
    {
        return productoSeleccionado[0];
    } 
}

let addProductoCarrito = async(objProducto) =>
{
    let producto = JSON.stringify(objProducto);

    try
    {
        await fs.promises.appendFile(CARRITO, `${producto},\r\n`);
        console.log(`Producto agregado: ${producto}`); 
    }
    catch(error)
    {
        return {error: `error: ${error}`};
    }
}

let deleteProductoCarrito = (id) => 
{
    let productos = getProductosCarrito();
    let arrayProductoBorrado = productos.filter((producto) => producto.id == id);
    let productoBorrado = arrayProductoBorrado[0];

    if(!productoBorrado)
    {
        return {error: "-3", message: `No existe un producto con la id: ${id}`};
    }
    else
    {
        let arrayProductos = productos.filter((producto) => producto.id != id);
        let contenido = arrayProductos.map((producto) => `${JSON.stringify(producto)}`);
        
        fs.writeFileSync(CARRITO, `${contenido.join(",\r\n")},\r\n`);
        
        return productoBorrado;
    }
}

module.exports = { getProductosCarrito, getProductoCarrito, addProductoCarrito, deleteProductoCarrito };