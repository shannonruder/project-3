var express = require('express');
const path = require("path");
var router = express.Router();
var auth = require("../controllers/UserController.js");

const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});
// // restrict index for logged in user only
// router.get('/', auth.home);
// // route to signup page
// router.get('/signup', auth.signup);
// // route for signup action
// router.post('/signup', auth.dosignup);
// // route to login page
// router.get('/login', auth.login);