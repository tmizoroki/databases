var mysql = require('mysql');
var Sequelize = require("sequelize");

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var sequelize = new Sequelize("chat", "root", "", {
  define: { timestamps: false }
});

var users = sequelize.define('users', {
  username: Sequelize.STRING
});

var messages = sequelize.define('messages', {
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
}); 

users.hasMany(messages);
messages.belongsTo(users);

users.sync();
messages.sync();

exports.users = users;
exports.messages = messages;
