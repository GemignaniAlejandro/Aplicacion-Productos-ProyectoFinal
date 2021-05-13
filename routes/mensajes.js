const express = require("express");
const router = express.Router();
const mensajesController = require("../controllers/mensajes");

router.get("/", mensajesController.mostrar_mensajes);
router.post("/", mensajesController.agregar_mensaje);

module.exports = router;


