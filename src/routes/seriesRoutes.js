const express = require("express");
const router = express.Router();

const validarSerie = require("../middleware/validarSerie");

const {
  listarSeries,
  obtenerSeriePorId,
  crearSerie,
  editarSerie,
  eliminarSerie
} = require("../controllers/seriesController");

router.get("/", listarSeries);
router.get("/:id", obtenerSeriePorId);
router.post("/", validarSerie, crearSerie);
router.put("/:id", validarSerie, editarSerie);
router.delete("/:id", eliminarSerie);

module.exports = router;
