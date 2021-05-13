require("dotenv").config();
const express = require("express");
const app = express();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);
const mongoose = require('mongoose');
const functions = require("./utils/functionsMensajes");

mongoose.connect("mongodb://localhost:27017/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//  ROUTER
const productosRouter = require("./routes/productos");
const carritoRouter = require("./routes/carrito");
const mensajesRouter = require("./routes/mensajes");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.sendFile(__dirname + '/index.html'));

// RUTAS
app.use("/productos",productosRouter);
app.use("/carrito", carritoRouter);
app.use("/mensajes", mensajesRouter);

io.on('connection', (socket) => {
    console.log('cliente conectado');

    socket.on('client-message', (data) =>
    {
        io.emit('server-message', data);
    });

    socket.on('client-chat-message', (datosMensaje) => 
    {
        functions.addMensaje(JSON.parse(datosMensaje));
        io.emit('server-chat-message', datosMensaje);
    });
});

httpServer.listen(PORT, () =>
{
    console.log(`Servidor en puerto ${PORT}`);
});