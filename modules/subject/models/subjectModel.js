const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({ 
  area: {type: String, required: true},
  name: {type: String, required: true}
});

module.exports = mongoose.model('Subject', subjectSchema);