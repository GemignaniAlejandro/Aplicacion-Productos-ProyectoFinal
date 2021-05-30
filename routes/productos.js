const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productos");
const esAdminMiddle = require("../middlewares/admin");

router.get("/vista-test", (req, res) => 
{
    res.sendFile(__dirname + '/indexFaker.html');
});

router.get("/test-datos", productosController.listar_productos_faker);

router.get("/:id?", productosController.listar_productos);

router.get("/borrar/:id", esAdminMiddle, productosController.borrar_producto);

router.post("/", esAdminMiddle, productosController.agregar_producto);

router.post("/actualizar/:id", esAdminMiddle, productosController.actualizar_producto);

module.exports = router;