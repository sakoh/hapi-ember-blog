var Post = require('../controllers/post');

module.exports = [
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
    path: '/posts/{id}',
    method: 'DELETE',
    handler: Post.destroy
  }
];
