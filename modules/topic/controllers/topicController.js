const Topic = require('../models/topicModel');

exports.getAllTopics = (req, res, next) => {
  Topic.find().populate({path: 'subject'}).exec().then(topics => {
      res.status(200).json(topics);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err });
    });
};

exports.getTopicById = (req, res) => {
  Topic.findById(req.params.id).populate({path: 'subject'}).exec().then(topic => { 
    res.status(200).json(topic);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
};

exports.createTopic = (req, res) => {
  const newTopic = new Topic(req.body);
  newTopic.save().then(topic => {
    res.status(201).json(topic);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
};

exports.updateTopic = (req, res) => {
  Topic.findByIdAndUpdate(req.params.id, req.body).then(topic => {
    res.status(200).json();
  })
  .catch(err => {
    res.status(500).send(err);
  });
};

exports.deleteTopic = (req, res) => {
  Topic.findByIdAndDelete(req.params.id).then(() => {
    res.status(204).send();
  })
  .catch(err => {
    res.status(500).send(err);
  });
};
