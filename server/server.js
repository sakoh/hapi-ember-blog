var Hapi = require('hapi'),
    server = new Hapi.Server('localhost', 8000, {cors: true});

server.route(require('posts'));

server.start(function() {
  console.log('server started at http://localhost:8000');
});
