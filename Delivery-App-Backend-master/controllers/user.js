const User = require('../models/user');
const axios = require('axios');
const { response } = require('express');

exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'No user was found in DB'
      });
    }
    req.profile = user;
    next();
  });
};

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate({ _id: req.profile._id }, { $set: req.body }, { new: true, useFindAndModify: false }, (err, user) => {
    if (err) {
      return res.status(400).json({
        error: 'You are not authorized to update this user'
      });
    }

    res.json(user);
  });
};

exports.notify = async (req, res) => {
  const body = (await User.find({})).map(doc => ({ to: doc.pushToken, title: 'NEW ORDER', body: 'Click to view' }));
  console.log(body);
  axios
    .post('https://exp.host/--/api/v2/push/send', body, {
      headers: {
        host: 'exp.host',
        accept: 'application/json',
        'accept-encoding': 'gzip, deflate',
        'content-type': 'application/json'
      }
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  res.send(response.data);
};
