const mongoose = require('mongoose');
const member = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String },
  active: { type: Boolean },
  date: { type: Date },
});
module.exports = mongoose.model('member', member);
