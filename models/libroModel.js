const mongoose = require("mongoose");
const LibroSchema = mongoose.Schema({
  nombre: {
    type: String,
    require: true,
  },
  descripcion: {
    type: String,
    require: true,
  }
  
});

module.exports = mongoose.model("libro", LibroSchema);