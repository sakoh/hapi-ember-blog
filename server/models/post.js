var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true }
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
