const db = require("../models");


exports.getCarbonData = async function(req, res, next){
  try {
    let data= await db.Data.find({category: "carbon"})
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

exports.getWildfireData = async function(req, res, next){
  try {
    let data= await db.Data.find({category: "wildfire", date: "2022-03-01"})
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

exports.getEarthquakeData = async function(req, res, next){
  try {
    let data= await db.Data.find({category: "earthquake", year: 2009})
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};

