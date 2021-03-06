require('dotenv').config()
const express = require('express');
const app = express();
const routes = require("./routes")
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan'); // used to see requests
const db = require('./models');
const PORT = process.env.PORT || 3001;

const isAuthenticated = require("./config/isAuthenticated");
const auth = require("./config/auth");



// Add routes, both API and view
app.use(routes);


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});


// Connect to the Mongo DB - try Heroku first
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/sampleusers";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }


// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://user1:password1@ds125871.mlab.com:25871/heroku_0xn0jnk7",
//   {
//     useCreateIndex: true,
//     useNewUrlParser: true
//   }
// );
// Setting CORS so that any website can
// Access our API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

//log all requests to the console
app.use(morgan('dev'));

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/appDB', {useNewUrlParser: true, useCreateIndex: true})
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));

//  
// 

// LOGIN ROUTE
app.post('/api/login', (req, res) => {
  console.log(req.body.email, req.body.password)
  auth
    .logUserIn(req.body.email, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
});

// SIGNUP ROUTE
app.post('/api/signup', (req, res) => {
  db.User.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// Any route with isAuthenticated is protected and you need a valid token
// to access
app.get('/api/user/:id', isAuthenticated, (req, res) => {
  db.User.findById(req.params.id).then(data => {
    if(data) {
      res.json(data);
    } else {
      res.status(404).send({success: false, message: 'No user found'});
    }
  }).catch(err => res.status(400).send(err));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// // Heroku 
// var databaseUri='mongodb://localhost:27017/appDB';
// if(process.env.MONGODB_URI){
// mongoose.connect(process.env.MONGODB_URI)
// }else {

// mongoose.connect(databaseUri);
// }

// // var db = mongoose.connection;
// db.on('error', function (err) {
//   console.log('Monhoose Error: ', err);
// });
// db.once('open', function (){
//   console.log("Mongoose connection succesful");
// });


// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// end

app.get('/', isAuthenticated /* Using the express jwt MW here */, (req, res) => {
  res.send('You are authenticated'); //Sending some response when authenticated
});

// Add routes, both API and view
app.use(routes)

// Error handling
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
    res.status(401).send(err);
  }
  else {
    next(err);
  }
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
