var express = require('express'),
  mongoose = require("mongoose")
var router = express.Router();

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  creator: String,
  description: String,
  image: String,
  website: String,
  servings: String,
  time: String,
  ingredients: String,
  prepSteps: String,
  keywords: String,
  rating: String,
  notes: String,
  addedBy: String
})

const Recipe = mongoose.model("Recipe", recipeSchema)

/* Get Recipe */
router.get('/', function (req, res) {
  console.log("Get Recipe req.query: ", req.query)
  // Recipe.find(req.query, {name: 1, image: 1}, function (err, foundBeer) {
  Recipe.find(req.query, function (err, foundBeer) {
    if (err) {
      console.error("User Get Route Error: ", err)
      res.send(err)
    }
    else {
      console.log("User Get Route foundUser", foundBeer)
      res.send(foundBeer)
    }
  })
});

/* Add A New Recipe */
router.post("/", function (req, res) {
  // console.log("User Post Route req.body", req.body)
  Recipe.create(req.body, (err, newBeer) => {
    if (err) {
      console.error("User Post Route Error: ", err)
      res.send(err)
    }
    else {
      console.log("User Post Route newBeer", newBeer)
      res.send(newBeer)
    }
  })
})

module.exports = router;
