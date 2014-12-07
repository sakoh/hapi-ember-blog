var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var Post = mongoose.model('Post', {
  title: String,
  body: String
});

module.exports = Post;
