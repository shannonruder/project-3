const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
var db = require("../models");


// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


// Get all examples
router.get("/api/fruits", function(req, res) {
	res.json(['apple', 'banana', 'cherry']);
});

// Create a new example
router.get("/api/vegetables", function(req, res) {
	res.json(['asperagus', 'broccoli', 'carrot']);
});


module.exports = router;