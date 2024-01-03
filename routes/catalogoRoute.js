//Rutas para el módulo Angecia
const express = require("express");
const router = express.Router();

const catalogoController = require("../controllers/catalogoController");

//api/agencias
router.get("/", catalogoController.loadCatalogos);
router.get("/:id", catalogoController.loadCatalogo);
router.put("/:id", catalogoController.updateCatalogo);
router.delete("/:id", catalogoController.deleteCatalogo);
router.post("/", catalogoController.addCatalogo);

module.exports = router;
