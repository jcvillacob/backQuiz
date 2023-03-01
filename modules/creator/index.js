const creatorRoutes = require('./routes');
const creatorController = require('./controllers/creatorController');
const Creator = require('./models/creatorModel');

module.exports = {
  creatorRoutes,
  creatorController,
  Creator
};