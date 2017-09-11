const mongoose = require('mongoose');

const resultSchema = mongoose.Schema({
  user: String,
  quiz: String,
  answers: [Number],
  passed: Boolean
});

module.exports = mongoose.model('result', resultSchema);
