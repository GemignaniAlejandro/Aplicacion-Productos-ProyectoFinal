let Producto = require("../models/mongodb/Producto");
const BASE_URL = process.env.BASE_URL;

let listar_productos = (req, res) =>
{
    const id = req.params.id;

    if(!id)
    {
        Producto.listarProductos(function(err, productos){
            console.log(productos);
            res.json(productos);
        });  
    }
    else
    {
        Producto.encontrarProductoPorId(id, function(err, producto){
            console.log(producto);
            res.json(producto);
        });
    }
    
}

let agregar_producto = (req, res) => 
{
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const codigo = req.body.codigo;
    const foto = req.body.foto;
    const precio = req.body.precio;
    const stock = req.body.stock;
    
    let producto = Producto.createInstance(nombre, descripcion, codigo, foto, precio, stock);
    
    Producto.agregarProducto(producto, function(err, newProducto){
        res.redirect(BASE_URL);
    });
}

let actualizar_producto = (req, res) =>
{
    const id = req.params.id;
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const codigo = req.body.codigo;
    const foto = req.body.foto;
    const precio = req.body.precio;
    const stock = req.body.stock;
    

    Producto.encontrarProductoPorId(id, function(err, producto){
        producto.timestamp = Date.now();
        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.codigo = codigo;
        producto.foto = foto;
        producto.precio = precio;
        producto.stock = stock;
        producto.save();
        res.json(producto);
        res.redirect(BASE_URL);
    });
}

let borrar_producto = (req, res) => 
{
    const id = req.params.id;
    Producto.borrarProducto(id, function(err){
        res.redirect(BASE_URL);
    });
}

module.exports = {listar_productos, agregar_producto, actualizar_producto, borrar_producto};
