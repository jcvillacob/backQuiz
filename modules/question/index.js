const questionRoutes = require('./routes');
const questionController = require('./controllers/questionController');
const Question = require('./models/questionModel');

module.exports = {
  questionRoutes,
  questionController,
  Question
};