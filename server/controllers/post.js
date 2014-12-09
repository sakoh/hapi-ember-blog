var Post = require('../models/post');

module.exports = {

  index: function(request, reply) {
    var post = Post.find();

    post.exec(function(err, models){
      if(err) reply(err);

      reply({posts:models});

    });
  },

  show: function(request, reply) {
    var post = Post.find({_id: request.params.id});

    post.exec(function(err, model){

      if(err) reply(err);

      reply({post:model});
    });

  },

  create: function(request, reply) {

    var data = request.payload.post;

    Post.create({
      title: data.title,
      body: data.body
    }, function(err, model){

      if(err) reply(err);

      reply({post:model});
    });
  },

  update: function(request, reply) {

    var data = request.payload.post;

    var currentPost = {_id: request.params.id};

    var updatedSchema = {
      $set: {
        title: data.title,
        body: data.body
      }
    };

    var post = Post.update(currentPost, updatedSchema);

    post.exec(function(err, model){

      if(err) reply(err);

      reply({post:model});
    });

  },

  destroy: function(request, reply) {
    var post = Post.remove({_id: request.params.id});

    post.exec(function(err, model){

      if(err) reply(err);

      reply("Post has been deleted");
    })
  }

};
