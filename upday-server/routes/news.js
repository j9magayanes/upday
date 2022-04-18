const express = require("express");
const router = express.Router({ mergeParams: true});

const {getCarbonNews, getWildfireNews, getEarthquakeNews, getAllNews} = require("../handlers/news");

router.route("/all")
.get(getAllNews)
router.route("/carbon")
.get(getCarbonNews)
router.route("/wildfire")
.get(getWildfireNews)
router.route("/earthquake")
.get(getEarthquakeNews)




module.exports = router;