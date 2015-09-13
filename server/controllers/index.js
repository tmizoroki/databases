// var models = require('../models');
var db = require('../db');

module.exports = {
  messages: {

    get: function (req, res) {
      db.messages.findAll({include: [db.users]}).then(function(results) {
        res.status(200).json(results);
      });
    }, // a function which handles a get request for all messages

    post: function (req, res) {
      db.users.findOrCreate({where: {username: req.body.username}})
        .then(function(user) {
          db.messages.create({
            userId: user[0].dataValues.id,
            message: req.body.message,
            roomname: req.body.roomname
          });
        })
        .then(function() {
         res.sendStatus(201); 
        });
    } // a function which handles posting a message to the database

  },

  users: {

    // Ditto as above
    get: function (req, res) {
      db.users.findAll()
      .then(function(result) {
        res.status(200).json(result);
      });
    },

    post: function (req, res) {
      db.users.create({
        username: req.body.username
      }).then(function(result) {
        res.sendStatus(201);
      });
    }

  }
};

