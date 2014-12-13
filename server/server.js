var Hapi = require('hapi'),
    mongoose = require('mongoose'),
    resource = require('hapi-resource'),
    controller = require('./controllers/controller'),
    Post = require('./models/post'),
    User = require('./models/user'),
    server = new Hapi.Server('localhost', 8000, {cors: true});

var PostsController = controller({
  name: 'post',
  model: Post
});

var UsersController = controller({
  name: 'user',
  model: User
});


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
