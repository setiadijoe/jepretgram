require('dotenv').config()
const jwt = require('jsonwebtoken')
const key = process.env.JWT_KEY

const hasLogin = (req, res, next) => {
  jwt.verify(req.headers.token, key, (err, decode) => {
    if (err) {
      console.log('ini ada error :', err);
    } else {
      console.log('ini authentic code ', decode);
      req.headers = decode
      console.log(req.headers);
      next()
    }
  })
}

module.exports = {
  hasLogin
}