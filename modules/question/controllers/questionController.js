const Question = require('../models/questionModel');

exports.getAllQuestions = (req, res, next) => {
  Question.find().populate({path: 'topic'}).populate({path: 'creator'}).exec().then(questions => {
      res.status(200).json(questions);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err });
    });
};

exports.getQuestionById = (req, res) => {
  Question.findById(req.params.id).populate({path: 'topic'}).populate({path: 'creator'}).exec().then(question => { 
    res.status(200).json(question);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
};

exports.createQuestion = (req, res) => {
  const newQuestion = new Question(req.body);
  newQuestion.save().then(question => {
    res.status(201).json(question);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
};

exports.updateQuestion = (req, res) => {
  Question.findByIdAndUpdate(req.params.id, req.body).then(question => {
    res.status(200).json();
  })
  .catch(err => {
    res.status(500).send(err);
  });
};

exports.deleteQuestion = (req, res) => {
  Question.findByIdAndDelete(req.params.id).then(() => {
    res.status(204).send();
  })
  .catch(err => {
    res.status(500).send(err);
  });
};
