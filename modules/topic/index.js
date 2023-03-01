const topicRoutes = require('./routes');
const topicController = require('./controllers/topicController');
const Topic = require('./models/topicModel');

module.exports = {
  topicRoutes,
  topicController,
  Topic
};