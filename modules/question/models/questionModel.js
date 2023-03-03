const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  statement: {type: String, required: true},
  wrongAnswers: [{type: String, required: true}],
  rightQuestion: {type: String, required: true},
  justification: {type: String, required: true},
  topic: {type: mongoose.Schema.Types.ObjectId, ref: 'Topic', required: true},
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'Creator', required: true}
});

module.exports = mongoose.model('Question', questionSchema);