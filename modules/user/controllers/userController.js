const User = require('../models/userModel');

exports.getAllUsers = (req, res, next) => {
  User.find().exec().then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err });
    });
};

exports.getUserById = (req, res) => {
  User.findById(req.params.id).exec().then(user => { 
    res.status(200).json(user);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
};

exports.createUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.save().then(user => {
    res.status(201).json(user);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send(err);
  });
};

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body).then(user => {
    res.status(200).json(user);
  })
  .catch(err => {
    res.status(500).send(err);
  });
};

exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id).then(() => {
    res.status(204).send();
  })
  .catch(err => {
    res.status(500).send(err);
  });
};
