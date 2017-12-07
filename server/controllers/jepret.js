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
  console.log('Ini yang dari body ', req.body);
  console.log('Ini yang dari file ', req.file);
  let img = new Jepret({
    author: req.headers.id,
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.file.cloudStoragePublicUrl
  })
  img.save()
  .then(newImg => {
    res.status(200).send({message: 'New Image', newImg})
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

const editImage = (req, res) => {
  Jepret.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      content: req.body.content
    }
  }, {new: true})
  .then(jepretbang => {
    res.status(200).send({
      message: 'Edit jepretang bang',
      jepretbang
    })
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

const removeImage = (req, res) => {
  Jepret.findByIdAndRemove(req.params.id)
  .then(remove => {
    res.status(200).send({message: 'Remove image',remove})
  })
  .catch(err => res.status(500).send(err))
}

const upVoteImage = (req, res) => {
  Jepret.findByIdAndUpdate(req.params.id, {
    $addToSet: {
      votes: req.headers.id
    }
  }, {new: true})
  .then(response => {
    res.status(200).send({
      message: 'You have Vote',
      status: true,
      response
    })
  })
  .catch(err => res.status(500).send(err))
}

const downVoteImage = (req, res) => {
  Jepret.findByIdAndUpdate(req.params.id, {
    $pull: {
      votes: req.headers.id
    }
  }, {new: true})
  .then(response => {
    res.status(200).send({
      message: 'You have unvote',
      status: false,
      response
    })
  })
  .catch(err => res.status(500).send(err))
}

module.exports = {
  getAllImages,
  postImages,
  editImage,
  removeImage,
  upVoteImage,
  downVoteImage
}