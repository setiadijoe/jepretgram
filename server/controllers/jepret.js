const Jepret = require('../models/JepretModel')

const getAllImages = (req, res) => {
  Jepret.find()
  .populate('author')
  .populate('votes')
  .then(jeprets => {
    res.status(200).send({
      message: 'All Images',
      jeprets
    })
  })
  .catch(err => {
    res.status(500).send(200)
  })
}

const postImages = (req, res) => {
  let img = new Jepret({
    author: req.headers.id,
    title: req.body.title,
    content: req.body.content
  })
}

module.exports = {
  getAllImages
}