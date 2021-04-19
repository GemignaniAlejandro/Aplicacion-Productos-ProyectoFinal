let Producto = require("../models/Producto");

let listar_productos = (req, res) =>
{
    const id = req.params.id;

    if(!id)
    {
        let productos = Producto.listarProductos();
        res.json(productos);
    }
    else
    {
        let producto = Producto.mostrarProducto(id);
        res.json(producto);
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
    let producto = new Producto(nombre, descripcion, codigo, foto, precio, stock);
    Producto.agregarProducto(producto);
    res.json(producto);
}

let actualizar_producto = (req, res) =>
{
    const id = parseInt(req.params.id);
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const codigo = req.body.codigo;
    const foto = req.body.foto;
    const precio = req.body.precio;
    const stock = req.body.stock;
    let producto = new Producto(nombre, descripcion, codigo, foto, precio, stock);
    res.json(Producto.actualizarProducto(id, producto));
}

let borrar_producto = (req, res) => 
{
    const id = parseInt(req.params.id);
    res.json(Producto.borrarProducto(id))
}

module.exports = {listar_productos, agregar_producto, actualizar_producto, borrar_producto};
