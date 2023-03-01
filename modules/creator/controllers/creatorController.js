const Creator = require('../models/creatorModel');

exports.getAllCreators = (req, res, next) => {
  Creator.find().exec().then(creators => {
      res.status(200).json(creators);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err });
    });
};

exports.getCreatorById = (req, res) => {
  Creator.findById(req.params.id).exec().then(creator => { 
    res.status(200).json(creator);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
};

exports.createCreator = (req, res) => {
  const newCreator = new Creator(req.body);
  newCreator.save().then(creator => {
    res.status(201).json(creator);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
};

exports.updateCreator = (req, res) => {
  Creator.findByIdAndUpdate(req.params.id, req.body).then(creator => {
    res.status(200).json();
  })
  .catch(err => {
    res.status(500).send(err);
  });
};

exports.deleteCreator = (req, res) => {
  Creator.findByIdAndDelete(req.params.id).then(() => {
    res.status(204).send();
  })
  .catch(err => {
    res.status(500).send(err);
  });
};
