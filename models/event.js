const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  image: { type: String },
  name: { type: String },
  address: { type: String },
  venue_name: { type: String },
  date: { type: String },
  time: { type: String }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;