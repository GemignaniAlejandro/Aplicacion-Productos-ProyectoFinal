const { optionsSQLite3 } = require("../options/SQLDatabases.js");
const knexSQLite3 = require("knex")(optionsSQLite3);

knexSQLite3.schema.createTable("productos", table => 
{
    table.increments("id")
    table.date("timestamp")
    table.string("nombre")
    table.string("descripcion")
    table.integer("codigo")
    table.string("foto")
    table.integer("precio")
    table.integer("stock")
})
.catch((err)=>{
    console.log(err);
    throw err;
})
.finally(() =>
{
    knexSQLite3.destroy();
})

