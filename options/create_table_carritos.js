const { optionsSQLite3 } = require("./SQLDatabases.js");
const knexSQLite3 = require("knex")(optionsSQLite3);

knexSQLite3.schema.createTable("carritos", table => 
{
    table.increments("id")
    table.date("timestamp")

    table.integer("producto_id")
    table.foreign("producto_id").references("producto.id")
    table.date("producto_timestamp").references("producto.timestamp")
    table.string("producto_nombre").references("producto.nombre")
    table.string("producto_descripcion").references("producto.descripcion")
    table.integer("producto_codigo").references("producto.codigo")
    table.integer("producto_precio").references("producto.precio")
    table.string("producto_foto").references("producto.foto")
    table.integer("producto_stock").references("producto.stock")
})
.then(() =>
{
    console.log("Tabla carritos creada");
})
.catch((err)=>
{
    console.log(err);
    throw err;
})
.finally(()=>
{
    knexSQLite3.destroy();
})