const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  admin: {type:Boolean, default: false}
});


// Exporting the whole fruits array
// and it will be named whatever we require as
module.exports = mongoose.model('User', UserSchema);
