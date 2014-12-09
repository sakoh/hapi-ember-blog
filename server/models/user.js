var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  firstName: { type: String, required: true},
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
