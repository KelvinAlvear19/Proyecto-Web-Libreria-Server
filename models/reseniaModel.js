const mongoose = require("mongoose");
const ReseniaSchema = mongoose.Schema({
  nombre: {
    type: String,
    require: true,
  },
  resenia: {
    type: String,
    require: true,
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("resenia", ReseniaSchema);