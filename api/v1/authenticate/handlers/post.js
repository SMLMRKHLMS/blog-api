const jwt = require('jsonwebtoken')
const respond = require('./../../../../utilities/respond')
const User = require('./../../../models/user')
const { secret } = require('./../../../../config')

const authenticateUser = ({
  username,
  password
}) => User.find({
  username,
  password
}).then(([ user ]) => user
  ? jwt.sign(user, secret, { expiresIn: 1440 })
  : Promise.reject(respond('POST_AUTHENTICATION_FAIL'))
)

const post = ({ body }, res) => authenticateUser(body)
  .then(token => res.json(respond('POST_AUTHENTICATION_SUCCESS', { data: { token } })))
  .catch(error => res.json(error))

module.exports = post
