const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: String,
  address: String,
  date: Date,
  email: String,
  time: String,
  venue_name: String
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;