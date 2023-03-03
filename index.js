const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Modules
const user = require('./modules/user');
const creator = require('./modules/creator');
const subject = require('./modules/subject');
const topic = require('./modules/topic');
const question = require('./modules/question');



//const middleware = require('./middleware');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config({path : 'variables.env'});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// middleware
//app.use(middleware);
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
app.use('/users', user.userRoutes); 
app.use('/creators', creator.creatorRoutes);
app.use('/subjects', subject.subjectRoutes);
app.use('/topics', topic.topicRoutes);
app.use('/questions', question.questionRoutes);


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});