const express = require("express");
const router = express.Router();

const estadisticasController = require("../controllers/estadisticasController");

//api/agencias
router.get("/", estadisticasController.loadEstadisticas);
router.get("/:id", estadisticasController.loadEstadistica);
router.put("/:id", estadisticasController.updateEstadistica);
router.delete("/:id", estadisticasController.deleteEstadistica);
router.post("/", estadisticasController.addEstadistica);

module.exports = router;