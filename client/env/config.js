// YOU DO NOT NEED TO EDIT this code.
//
// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.
if (!/(&|\?)username=/.test(window.location.search)) {
  var server = 'http://127.0.0.1:3000/classes/users'

  var newSearch = window.location.search;
  if (newSearch !== '' & newSearch !== '?') {
    newSearch += '&';
  }

  var username = (prompt('What is your name?') || 'anonymous');
  newSearch += 'username=' + username;
  window.location.search = newSearch;

  $.ajax({
    url: server,
    type: 'POST',
    data: JSON.stringify({username: username}),
    contentType: 'application/json',
    success: function (data) {
    },
    error: function (data) {
      console.error('chatterbox: Failed to send user');
    }
  });
}

