const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");
const db = require('../../models');

// Matches with "/api/events"
router.route("/")
  .get(eventsController.findAll)

  // writing a function here to pull specific data
  .post(eventsController.create);

 
router.route('/ticketMaster')
  .get(eventsController.ticket)

router.route('/artist/:name')
  .get(eventsController.searchArtist)
// Matches with "/api/events/:id"
router
  .route("/:id")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);

router.route("/save").post((req, res)=>{
  db.Event.create(req.body)
    .then(data => res.json(data))
    .catch(err => {
      console.log(err)
      res.status(400).json(err)
    });
})

router.route("/all/:email").get((req, res)=>{
  console.log('here')
  db.Event.find({email: req.params.email})
  .then(data => res.json(data))
  .catch(err => {
    console.log(err)
    res.status(400).json(err)
  });
})
// db.Event.find all the emails which match req.params.email
// take the result and send it back to the frontend with res.json
module.exports = router;
