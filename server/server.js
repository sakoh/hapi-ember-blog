var Hapi = require('hapi'),
    mongoose = require('mongoose'),
    server = new Hapi.Server('localhost', 8000, {cors: true});

var resource = require('./resource'),
    PostsController = require('./controllers/post'),
    UsersController = require('./controllers/user');


mongoose.connect('mongodb://localhost/test');

server.route(
  resource({
    name: 'post',
    controller: PostsController,
    namespace: '/api/v1'
  })
);

server.route(
  resource({
    name: 'user',
    controller: UsersController,
    namespace: '/api/v1'
  })
);

server.start(function() {
  console.log('server started at http://localhost:8000');
});
