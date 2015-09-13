// var db = require('../db');

// module.exports = {
//   messages: {
//     get: function (callback) {
//       db.retrieveMessage(function(result) {
//         console.log("before JSON stringify models", typeof result, result);
//         callback(JSON.stringify(result));
//       });
//     }, // a function which produces all the messages
//     post: function (messageObj) {
//       db.insertMessage(messageObj);
//     } // a function which can be used to insert a message into the database
//   },

//   users: {
//     // Ditto as above.
//     get: function (callback) {
//       db.retrieveUsers(function(result) {
//         callback(JSON.stringify(result));
//       });
//     },
//     post: function (usernameObj) {
//       db.insertUser(usernameObj);
//     }
//   }
// };

