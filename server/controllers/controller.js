module.exports = function(config) {

  return {

    index: function(request, reply) {

      config.model
        .find()
        .exec(function(err, models){
          var response = {};

          if(err) reply(err);

          response[config.name + 's'] = models

          reply(response);

        });

    },

    show: function(request, reply) {
      config.model
        .find({_id: request.params.id})
        .exec(function(err, model){
          var response = {};

          if(err) reply(err);

          response[config.name] = model;

          reply(response);
      });

    },

    create: function(request, reply) {

      var data = request.payload[config.name];

      config.model.create(data, function(err, model){
        var response = {};

        if(err) reply(err);

        response[config.name] = model;

        reply(response);

      });
    },

    update: function(request, reply) {

      var data = request.payload[config.name];

      config.model
        .update({_id: request.params.id}, { $set: data })
        .exec(function(err, model){
          var response = {};

          if(err) reply(err);

          response[config.name] = model;

          reply(response);

        });

    },

    destroy: function(request, reply) {
      config.model
        .remove({_id: request.params.id})
        .exec(function(err, model){

        if(err) reply(err);

        reply(config.name + " has been deleted");
      });
    }

  };


}
