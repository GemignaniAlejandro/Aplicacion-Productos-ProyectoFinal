const express = require("express");
const router = express.Router();
const carritoController = require('../controllers/carrito');

router.get("/:id?", carritoController.listar_productos_carrito);

router.post("/:id_producto", carritoController.agregar_producto_carrito);

router.delete("/:id", carritoController.borrar_producto_carrito);

module.exports = router;