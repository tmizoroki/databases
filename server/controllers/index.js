var models = require('../models');

module.exports = {
  messages: {

    get: function (req, res) {
      console.log("You're in controllers");
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

