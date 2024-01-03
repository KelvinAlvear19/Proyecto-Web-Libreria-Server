const mongoose = require("mongoose");
const CatalogoSchema = mongoose.Schema({
  categoria: {
    type: String,
    require: true,
  },
  descripcion: {
    type: String,
    require: true,
  }
  
});

module.exports = mongoose.model("catalogo", CatalogoSchema);
