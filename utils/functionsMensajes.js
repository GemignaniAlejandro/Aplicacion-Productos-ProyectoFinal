let fs = require("fs");

let addMensaje = async (mensaje) =>
{
    try 
    {
        fs.promises.appendFile('chatLog.txt', `${JSON.stringify(mensaje)},\r\n`);
    } catch (error) {
        console.log(`No se encontró el archivo, error: ${error}`);
    }
}

let getMensajes = () => 
{
    let arrayMensajes = [];
    try
    {
        let mensajes = fs.readFileSync('chatLog.txt', 'utf-8');
        arrayMensajes = mensajes.split(',\r\n');
        arrayMensajes.splice(arrayMensajes.length - 1, 1);
        let prueba = arrayMensajes.map((datosMensaje) => JSON.parse(datosMensaje));
        return prueba;  
    }
    catch(error)
    {
        console.log(`No se encontró el archivo, error: ${error}`);
        return [];
    }
}


module.exports = {addMensaje, getMensajes};