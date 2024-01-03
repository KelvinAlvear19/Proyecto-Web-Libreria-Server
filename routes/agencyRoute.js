//Rutas para el módulo Angecia
const express = require("express");
const router = express.Router();

const agencyController = require("../controllers/agencyController");

//api/agencias
router.post("/", agencyController.addAgency);
router.get("/", agencyController.loadAgencies);
router.get("/:id", agencyController.loadAgency);
router.put("/:id", agencyController.updateAgency);
router.delete("/:id", agencyController.deleteAgency);

module.exports = router;
