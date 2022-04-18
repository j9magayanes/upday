const db = require("../models");


exports.getAllNews = async function(req, res, next){
  try {
    let news= await db.News.find({isActive: true})
    return res.status(200).json(news);
  } catch (err) {
    return next(err);
  }
};


exports.getCarbonNews = async function(req, res, next){
  try {
    let news= await db.News.find({category: "carbon"})
    return res.status(200).json(news);
  } catch (err) {
    return next(err);
  }
};

exports.getWildfireNews = async function(req, res, next){
  try {
    let news= await db.News.find({category: "wildfire"})
    return res.status(200).json(news);
  } catch (err) {
    return next(err);
  }
};

exports.getEarthquakeNews = async function(req, res, next){
  try {
    let news= await db.News.find({category: "earthquake"})
    return res.status(200).json(news);
  } catch (err) {
    return next(err);
  }
};

