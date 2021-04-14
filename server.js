require("dotenv").config();
const express = require("express");
const app = express();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//  ROUTER
const productosRouter = require("./routes/productos");
const carritoRouter = require("./routes/carrito");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.sendFile(__dirname + '/index.html'));

// RUTAS
app.use("/productos",productosRouter);
app.use("/carrito", carritoRouter);



httpServer.listen(PORT, () =>
{
    console.log(`Servidor en puerto ${PORT}`);
});