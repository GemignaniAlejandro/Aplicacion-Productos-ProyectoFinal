let Carrito = require("../models/filesystem/Carrito");
let Producto = require("../models/filesystem/Producto");
const BASE_URL = process.env.BASE_URL;

let listar_productos_carrito = (req, res) => 
{
    const id = req.params.id;

    if(!id)
    {
        let productos = Carrito.listarProductos();
        res.json(productos);
    }
    else
    {
        let producto = Carrito.mostrarProducto(id);
        res.json(producto);
    }
}

let agregar_producto_carrito = (req, res) => 
{
    const id_producto = req.params.id_producto;
    let producto = Producto.mostrarProducto(id_producto);
    let carrito = new Carrito(producto)
    Carrito.agregarProducto(carrito);
    //res.redirect(BASE_URL);
    res.json(carrito);
}

let borrar_producto_carrito = (req, res) => 
{
    const id = req.params.id;
    res.json(Carrito.borrarProducto(id));
}

module.exports = { listar_productos_carrito, agregar_producto_carrito, borrar_producto_carrito };