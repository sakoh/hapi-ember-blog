var User = require('../controllers/user');

module.exports = [
{
  path: '/users',
  method: 'GET',
  handler: User.index
},
{
  path: '/users/{id}',
  method: 'GET',
  handler: User.show
},
{
  path: '/users',
  method: 'POST',
  handler: User.create
},
{
  path: '/users/{id}',
  method: 'PUT',
  handler: User.update
},
{
  path: '/users/{id}',
  method: 'DELETE',
  handler: User.destroy
}
];
