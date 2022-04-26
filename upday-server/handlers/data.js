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

exports.getMoneyData = async function(req, res, next){
  try {
    let data= await db.Data.find({category: "money"})
    return res.status(200).json(data);
  } catch (err) {
    return next(err);
  }
};


exports.getMoneyAverage = async function(req, res, next){
  try {
    const agg = await db.Data.aggregate([
      { $match: { category: "money" } },
      { $group: {
        _id: "$category",
        ave: { $avg: "$value1" }
      }}
    ])
    average = agg[0].ave
    console.log(average)
  } catch (err) {
    return next(err);
  }
};

exports.getWildfireAverage = async function(req, res, next){
  try {
    const agg = await db.Data.aggregate([
      { $match: { category: "wildfire" } },
      { $group: {
        _id: "$category",
        ave: { $avg: "$value1" }
      }}
    ])
    average = agg[0].ave
    console.log(average)
  } catch (err) {
    return next(err);
  }
};

exports.getCarbonAverage = async function(req, res, next){
  try {
    const agg = await db.Data.aggregate([
      { $match: { category: "carbon" } },
      { $group: {
        _id: "$category",
        ave: { $avg: "$value1" }
      }}
    ])
    average = agg[0].ave
    console.log(average)
    return res.status(200).json(agg);
  } catch (err) {
    return next(err);
  }
};



