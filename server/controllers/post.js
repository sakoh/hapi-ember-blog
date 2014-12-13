var Post = require('../models/post')
    controller = require('./controller');

module.exports = controller({
  name: 'post',
  model: Post
});
