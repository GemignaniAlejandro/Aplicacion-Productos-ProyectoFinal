const fs = require("fs");
const PRODUCTOS = process.env.ARCHIVO_PRODUCTOS;


let getProductos = () =>
{
    let arrayProductos = [];
    try
    {
        let productos = fs.readFileSync(PRODUCTOS, "utf-8");
        
        arrayProductos = productos.split(",\r\n");
        
        arrayProductos.splice(arrayProductos.length - 1, 1);
        
        return arrayProductos.map((producto) => JSON.parse(producto));    
    }
    catch(error)
    {
        return {error: `error: ${error}`};
    }
    
}

let getProducto = (id) =>
{
    let productos = getProductos();
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

let addProducto = async (objProducto) => 
{
    let producto = JSON.stringify(objProducto);

    try
    {
        await fs.promises.appendFile(PRODUCTOS, `${producto},\r\n`);
        console.log(`Producto agregado: ${producto}`); 
    }
    catch(error)
    {
        return {error: `error: ${error}`};
    }
}

let updateProducto = (id, {timestamp, nombre, descripcion, codigo, foto, precio, stock}) => 
{
    try 
    {
        let productos = getProductos();
        let arrayProductoActualizado = productos.filter((producto) => producto.id == id);
        let productoActualizado = arrayProductoActualizado[0];
        
        if(!productoActualizado)
        {
            return {error: "-3" , message: `No existe un producto con la id ${id}`}
        }
        else
        {
            productos.forEach((producto)=>
            {
                
                if(producto.id == id)
                {
                    producto.timestamp = timestamp;
                    producto.nombre = nombre;
                    producto.descripcion = descripcion;
                    producto.codigo = codigo;
                    producto.foto = foto;
                    producto.precio = precio;
                    producto.stock = stock;
                }
            });

            let contenido = productos.map((producto) => `${JSON.stringify(producto)}`);
        
            fs.writeFileSync(PRODUCTOS, `${contenido.join(",\r\n")},\r\n`);
            return productoActualizado;    
        }
    }
    catch(error)
    {
        return [{error: `error: ${error}`}];
    }
}

let deleteProducto = (id) =>
{
    let productos = getProductos();
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
        
        fs.writeFileSync(PRODUCTOS, `${contenido.join(",\r\n")},\r\n`);
        
        return productoBorrado;
    }
}

module.exports = { getProductos, getProducto, addProducto, updateProducto, deleteProducto }