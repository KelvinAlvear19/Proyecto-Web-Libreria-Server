const express = require("express");
const router = express.Router();

const ReseniaController = require("../controllers/reseniaController");

//api/agencias
router.get("/",ReseniaController.loadResenias);
router.get("/:id", ReseniaController.loadResenia);
router.put("/:id", ReseniaController.updateResenia);
router.delete("/:id", ReseniaController.deleteResenia);
router.post("/", ReseniaController.addResenia);

module.exports = router;