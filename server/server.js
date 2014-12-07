var Hapi = require('hapi'),
    server = new Hapi.Server('localhost', 8000),
    Post = require('./controllers/post');

server.route([
  {
    path: '/',
    method: 'GET',
    handler: Post.index
  },
  {
    path: '/{id}',
    method: 'GET',
    handler: Post.show
  },
  {
    path: '/',
    method: 'POST',
    handler: Post.create
  },
  {
    path: '/{id}',
    method: 'PUT',
    handler: Post.update
  },
  {
    path: '/{id}',
    method: 'DELETE',
    handler: Post.destroy
  }
]);

server.start(function() {
  console.log('server started at http://localhost:8000');
})
