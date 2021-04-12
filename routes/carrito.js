const express = require("express");
const router = express.Router();

router.get("/:id?", (req, res) => res.send("Listar productos guardados por su ID de carrito."));

router.post("/:id_producto", (req, res) => res.send("Agregar uno o más productos al carrito por su ID."));

router.delete("/:id", (req, res) => res.send("Borrar un producto por su ID de carrito"));

module.exports = router;