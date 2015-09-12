var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  // host: ,
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect();

exports.insertUser = function(usernameObj) {
  console.log('about to insert into users')
  connection.query('INSERT into users SET ?', usernameObj)
};

exports.insertMessage = function(messageObj) {
  connection.query('SELECT userID from users where username = ?', messageObj.username, function(err, result) {
    delete messageObj.username;
    messageObj.userID = result[0].userID;

    console.log('about to insert into messages');
    connection.query('INSERT into messages SET ?', messageObj);
  });
};

exports.retrieveMessage = function(callback) {
  var queryString = 'SELECT u.username, m.message, m.roomname ' + 
                    'FROM users u inner join messages m on (u.userID = m.userID)';
  connection.query(queryString, function(err, result) {
    console.log("in db", typeof result);
    callback(result);
  });
};

exports.retrieveUsers = function(callback) {
  connection.query('SELECT username from users', function(err, result) {
    callback(result);
  })
}