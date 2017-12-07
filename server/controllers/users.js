require('dotenv').config()

const UserModel = require('../models/UserModel'),
      jwt = require('jsonwebtoken'),
      key = process.env.JWT_KEY,
      bcrypt = require('bcrypt')

const signUp = (req, res) => {
  console.log('isi dari req body saat sign up' ,req.body)
  let user = new UserModel({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  })
  user.save()
  .then(newUser => {
    console.log('New User Coming')
    res.status(200).send({
      message: 'New User Coming!',
      newUser
    })
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

module.exports = {
  signUp
}