const mongoose = require('mongoose');
const member = new mongoose.Schema({
  member: { type: String, required: true },
  position: { type: String },
  day: { type: String },
  patrol: { type: String },
  active: { type: Boolean, default: true },
  date: { type: Date },
});
module.exports = mongoose.model('member', member);
