let Carrito = require("../models/mongodb/Carrito");
let Producto = require("../models/mongodb/Producto");
const BASE_URL = process.env.BASE_URL;

let listar_productos_carrito = (req, res) => 
{
    const id = req.params.id;

    if(!id)
    {
        Carrito.listarCarritos(function(err, carritos){
            res.json(carritos);
            console.log(carritos);
        });
        
    }
    else
    {
        Carrito.encontrarCarritoPorId(id, function(err, carrito){
            res.json(carrito);
            console.log(carrito);
        });
        
    }
}

let agregar_producto_carrito = (req, res) => 
{
    const id_producto = req.params.id_producto;
    
    Producto.encontrarProductoPorId(id_producto, function(err, eProducto){
        if (err) throw err;
        let carrito = Carrito.createInstance(eProducto);
        Carrito.crearCarrito(carrito, function(err, producto){
            if (err) throw err;
            Carrito.agregarProductoAlCarrito(producto);
            res.json(producto);
        });
        
    });
    
    //res.redirect(BASE_URL);
    
}

let borrar_producto_carrito = (req, res) => 
{
    const id = req.params.id;
    Carrito.borrarProducto(id, function(err){
        res.redirect(BASE_URL);
    })
}

module.exports = { listar_productos_carrito, agregar_producto_carrito, borrar_producto_carrito };