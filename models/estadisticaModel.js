const mongoose = require("mongoose");
const EstadisticaSchema = mongoose.Schema({
  libro: {
    type: String,
    require: true,
  },
  puntuacion: {
    type: String,
    require: true,
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("estadistica", EstadisticaSchema);