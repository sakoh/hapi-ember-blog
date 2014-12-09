var Hapi = require('hapi'),
    mongoose = require('mongoose'),
    server = new Hapi.Server('localhost', 8000, {cors: true});


mongoose.connect('mongodb://localhost/test');

server.route(require('./routes/posts'));
server.route(require('./routes/users'));

server.start(function() {
  console.log('server started at http://localhost:8000');
});
