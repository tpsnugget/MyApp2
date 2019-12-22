var express = require('express'),
  mongoose = require("mongoose")
var router = express.Router();

const rvSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  streetAddress: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
  latitude: String,
  longitude: String,
  image: String,
  website: String,
  reviewWebsite: String,
  reviewWebsiteRating: String,
  siteId: String,
  electricalHookup: String,
  water: Boolean,
  sewerHookup: Boolean,
  dumpStation: Boolean,
  pullThroughSite: Boolean,
  rate: String,
  petsAllowed: Boolean,
  petRestrictions: String,
  restrooms: Boolean,
  showers: Boolean,
  myRating: String,
  notes: String,
  addedBy: String
})

const RV = mongoose.model("RV", rvSchema)

/* Get RV */
router.get('/', function (req, res) {
  console.log("Get RV req.query: ", req.query)
  // RV.find(req.query, {name: 1, image: 1}, function (err, foundRV) {
  RV.find(req.query, function (err, foundRV) {
    if (err) {
      console.error("User Get Route Error: ", err)
      res.send(err)
    }
    else {
      console.log("User Get Route foundUser", foundRV)
      res.send(foundRV)
    }
  })
});

/* Add A New RV */
router.post("/", function (req, res) {
  // console.log("User Post Route req.body", req.body)
  RV.create(req.body, (err, newRV) => {
    if (err) {
      console.error("User Post Route Error: ", err)
      res.send(err)
    }
    else {
      console.log("User Post Route newRV", newRV)
      res.send(newRV)
    }
  })
})

module.exports = router;
