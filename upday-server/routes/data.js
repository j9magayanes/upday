const express = require("express");
const router = express.Router({ mergeParams: true});

const {getCarbonData, getWildfireData, getEarthquakeData} = require("../handlers/data");


router.route("/carbon")
.get(getCarbonData)
router.route("/wildfire")
.get(getWildfireData)
router.route("/earthquake")
.get(getEarthquakeData)




module.exports = router;