const subjectRoutes = require('./routes');
const subjectController = require('./controllers/subjectController');
const Subject = require('./models/subjectModel');

module.exports = {
  subjectRoutes,
  subjectController,
  Subject
};