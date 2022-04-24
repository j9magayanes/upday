const express = require("express");
const router = express.Router({ mergeParams: true});

const {getCarbonData, getWildfireData, getEarthquakeData,getMoneyData} = require("../handlers/data");


router.route("/carbon")
.get(getCarbonData)
router.route("/wildfire")
.get(getWildfireData)
router.route("/earthquake")
.get(getEarthquakeData)
router.route("/money")
.get(getMoneyData)




module.exports = router;