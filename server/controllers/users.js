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

const signIn = (req, res) => {
  UserModel.findOne({username: req.body.username})
  .then(user => {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      let token = jwt.sign({
        id: user._id,
        name: user.name,
        username: user.username
      }, key)
      console.log('dapat token dong')
      let jwtToken = {token: token, name: user.name, message: `${user.name} is login`}
      res.status(200).send(jwtToken)
    } else {
      res.status(400).send('Password invalid')
    }
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

const getAll = (req, res) => {
  UserModel.find()
  .then(user => res.status(200).send(user))
  .catch(err => res.status(500).send(err))
}

module.exports = {
  signUp,
  signIn,
  getAll
}