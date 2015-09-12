var models = require('../models');

module.exports = {
  messages: {

    get: function (req, res) {
      models.messages.get(function(result) {
        console.log('controllers result', result);
        res.status(200).send(result);
      });
    }, // a function which handles a get request for all messages

    post: function (req, res) {
      console.log('inside controllers messages post');
      models.messages.post(req.body);
      res.sendStatus(201);
    } // a function which handles posting a message to the database

  },

  users: {

    // Ditto as above
    get: function (req, res) {

    },

    post: function (req, res) {
      console.log('inside controllers users post');
      models.users.post(req.body);
      res.sendStatus(201);
    }

  }
};

