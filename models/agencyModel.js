const mongoose = require("mongoose");
const AgencySchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("agency", AgencySchema);
