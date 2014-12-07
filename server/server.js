var Hapi = require('hapi'),
    server = new Hapi.Server('localhost', 8000, {cors: true}),
    Post = require('./controllers/post');

server.route([
  {
    path: '/posts',
    method: 'GET',
    handler: Post.index
  },
  {
    path: '/posts/{id}',
    method: 'GET',
    handler: Post.show
  },
  {
    path: '/posts',
    method: 'POST',
    handler: Post.create
  },
  {
    path: '/posts/{id}',
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
