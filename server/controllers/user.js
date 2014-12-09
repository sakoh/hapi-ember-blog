var User = require('../models/user');

module.exports = {

  index: function(request, reply) {
    var user = User.find();

    user.exec(function(err, models){
      if(err) reply(err);

      reply({users:models});

    });
  },

  show: function(request, reply) {
    var user = User.find({_id: request.params.id});

    user.exec(function(err, model){

      if(err) reply(err);

      reply({user:model});
    });

  },

  create: function(request, reply) {

    var data = request.payload.user;

    User.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      street: data.street,
      city: data.city,
      state: data.state,
      zipCode: data.zipCode
    }, function(err, model){

      if(err) reply(err);

      reply({user:model});
    });
  },

  update: function(request, reply) {

    var data = request.payload.user;

    var currentUser = {_id: request.params.id};

    var updatedSchema = {
      $set: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        street: data.street,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode
      }
    };

    var user = User.update(currentUser, updatedSchema);

    user.exec(function(err, model){

      if(err) reply(err);

      reply({User:model});
    });

  },

  destroy: function(request, reply) {
    var user = User.remove({_id: request.params.id});

    user.exec(function(err, model){

      if(err) reply(err);

      reply("User has been deleted");
    })
  }

};
