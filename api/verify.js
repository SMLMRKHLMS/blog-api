const jwt = require('jsonwebtoken')
const respond = require('./../utilities/respond')
const { secret } = require('./../config')

const verify = (req, res, next) => new Promise((resolve, reject) => {
  const token = req.headers['x-access-token']
  token ? jwt.verify(token, secret, (error, decoded) => {
    req.userID = decoded._doc._id
    error ? res.json(respond('TOKEN_ERROR')) : next()
  }) : res.json(respond('TOKEN_ERROR'))
})

module.exports = verify
