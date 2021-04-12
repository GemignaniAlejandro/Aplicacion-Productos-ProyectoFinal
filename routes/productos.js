const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productos");
const esAdminMiddle = require("../middlewares/admin");


router.get("/:id?", productosController.listar_productos);

router.post("/", esAdminMiddle, productosController.agregar_producto);

router.put("/:id", esAdminMiddle, productosController.actualizar_producto);

router.delete("/:id", esAdminMiddle, productosController.borrar_producto);

module.exports = router