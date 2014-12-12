module.exports = function(name, controller) {

  return [
    {
      path: '/' + name + 's',
      method: 'GET',
      handler: controller.index
    },
    {
      path: '/' + name + 's/{id}',
      method: 'GET',
      handler: controller.show
    },
    {
      path: '/' + name + 's',
      method: 'POST',
      handler: controller.create
    },
    {
      path: '/' + name + 's/{id}',
      method: 'PUT',
      handler: controller.update
    },
    {
      path: '/' + name + 's/{id}',
      method: 'DELETE',
      handler: controller.destroy
    }
  ];

}
