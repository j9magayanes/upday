const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  iso: {
    type: String,
    required: false,
    maxLength: 3
  },
  country: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: true,
  },
  value1: {
    type: Number,
    required: true,
  },
  value2: {
    type: Number,
    required: false,
  },
  lat: {
    type: Number,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});



const Data = mongoose.model("Data", dataSchema);
module.exports = Data;