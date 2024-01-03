const express = require("express");
const router = express.Router();

const libroController = require("../controllers/libroController");

//api/agencias
router.get("/", libroController.loadLibros);
router.get("/:id", libroController.loadLibro);
router.put("/:id", libroController.updateLibro);
router.delete("/:id", libroController.deleteLibro);
router.post("/", libroController.addLibros);

module.exports = router;