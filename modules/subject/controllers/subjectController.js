const Subject = require('../models/subjectModel');

exports.getAllSubjects = (req, res, next) => {
  Subject.find().exec().then(subjects => {
      res.status(200).json(subjects);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err });
    });
};

exports.getSubjectById = (req, res) => {
  Subject.findById(req.params.id).exec().then(subject => { 
    res.status(200).json(subject);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
};

exports.createSubject = (req, res) => {
  const newSubject = new Subject(req.body);
  newSubject.save().then(subject => {
    res.status(201).json(subject);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
};

exports.updateSubject = (req, res) => {
  Subject.findByIdAndUpdate(req.params.id, req.body).then(subject => {
    res.status(200).json();
  })
  .catch(err => {
    res.status(500).send(err);
  });
};

exports.deleteSubject = (req, res) => {
  Subject.findByIdAndDelete(req.params.id).then(() => {
    res.status(204).send();
  })
  .catch(err => {
    res.status(500).send(err);
  });
};
