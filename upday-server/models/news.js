const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
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
  headline: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  year: {
    type: Number,
    required: false,
  },
  isActive: {
    type: Boolean,
    required: false,
  },
});



const News = mongoose.model("News", newsSchema);
module.exports = News;