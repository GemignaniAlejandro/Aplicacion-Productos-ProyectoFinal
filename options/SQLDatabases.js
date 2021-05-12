const optionsMySQL = 
{
    client: "mysql",
    connection: 
    {
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "ecommerce"
    }
};

const optionsSQLite3 = 
{
    client: "sqlite3",
    connection: 
    {
        filename: "./db/ecommerce.sqlite"
    },
    useNullAsDefault: true
};

module.exports = {optionsMySQL, optionsSQLite3};