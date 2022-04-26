const express = require("express");
const router = express.Router({ mergeParams: true});

const {getCarbonData, getWildfireData, getEarthquakeData,getMoneyData, getMoneyAverage, getCarbonAverage, getWildfireAverage} = require("../handlers/data");


router.route("/carbon")
.get(getCarbonData)
router.route("/wildfire")
.get(getWildfireData)
router.route("/earthquake")
.get(getEarthquakeData)
router.route("/money")
.get(getMoneyData)
router.route("/carbon/average")
.get(getCarbonAverage)
router.route("/wildfire/average")
.get(getWildfireAverage)
router.route("/money/average")
.get(getMoneyAverage)




module.exports = router;