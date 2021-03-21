const mongoose = require("mongoose");

const ClanSchema = new mongoose.Schema({
  ime: {
    type: String,
    trim: true,
    required: true,
  },
  prezime: {
    type: String,
    trim: true,
    required: true,
  },
  mail: {
    type: String,
    trim: true,
    required: true,
  },
  skola: {
    type: String,
    trim: true,
    required: true,
  },
});

const TimSchema = new mongoose.Schema({
  ime: {
    type: String,
    trim: true,
    required: true,
  },
  omiljeneTehnologije: [String],
  clanovi: [ClanSchema],
});

module.exports = mongoose.model("Tim", TimSchema);
