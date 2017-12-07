const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      bcrypt = require('bcrypt')

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.pre('save', function (next) {
  console.log(this.password, 'ini password');
  let hash = bcrypt.hashSync(this.password, 10);
  this.password = hash
  console.log(this.password, 'ulululululalalalala');
  next()
})

const User = mongoose.model('Users', userSchema)

module.exports = User