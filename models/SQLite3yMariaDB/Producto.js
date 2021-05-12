const {optionsMySQL, optionsSQLite3} = require("../../options/SQLDatabases");
const knexSQLite3 = require("knex")(optionsSQLite3);

let getProductos = async() => 
{
    try {
        let productos = await knexSQLite3.from("productos")
        .select("*");
        return productos;
    } catch (error) {
        return [];
    }
}

let getProducto = async(id) =>
{
    try
    {
        let producto = await knexSQLite3.from("productos").select("*").where("id", "=", id)
        return producto;
    }
    catch(error)
    {
        return {};
    }
}

let addProducto = async(producto) =>
{   
    await knex("productos").insert({
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        codigo: producto.codigo,
        foto: producto.foto,
        precio: producto.precio,
        stock: producto.stock

    })
        .then(() => console.log("agregado"))
        .catch((err) => {console.log(err); throw err;});
}

module.exports = { getProductos, getProducto, addProducto }
