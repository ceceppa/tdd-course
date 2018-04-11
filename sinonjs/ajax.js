const jQuery = require('jquery');

function getTodos(listId, callback) {
  jQuery.ajax({
    url: '/todo/' + listId + '/items',
    success: function(data) {
      callback(null, data);
    },
  });
}

module.exports = getTodos;
