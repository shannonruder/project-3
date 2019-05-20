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
  console.log(req.body)
  db.Event.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
})
module.exports = router;
