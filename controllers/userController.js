const db = require("../models");

module.exports = {
  getOne: function (req, res) {
    db.User
      .findOne(
        { username: req.params.username }
      )
      .then((results) => res.json(results))
      .catch(err => res.status(422).json(err));
  },
  addFavorite: function (req, res) {
    const { image,
      name,
      address,
      venue_name,
      date,
      time } = req.body
    const data = { name, image: image.url, address, venue_name, date, time }
    db.User
      .update(
        { _id: req.params.id },
        { '$addToSet': { 'favorites': data } }
      )
      .then((results) => res.json(results))
      .catch(err => res.status(422).json(err));
  }
}
