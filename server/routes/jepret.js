const express = require('express');
const router = express.Router();
const image = require('../helpers/image')
const Jepret = require('../controllers/jepret')
const Auth = require('../helpers/auth')

router.post('/', Auth.hasLogin, image.multer.single('image'), image.sendUploadToGCS, Jepret.postImages)
router.get('/', Jepret.getAllImages)
router.put('/:id', Auth.hasLogin, Jepret.editImage)
router.put('/upvote/:id', Auth.hasLogin, Jepret.upVoteImage)
router.put('/downvote/:id',Auth.hasLogin, Jepret.downVoteImage)
router.delete('/:id',Auth.hasLogin, Jepret.removeImage)

module.exports = router;