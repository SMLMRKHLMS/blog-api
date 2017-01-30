const respond = require('./../../../../utilities/respond')
const User = require('./../../../models/user')

const validateUser = body => user => !user.length
  ? new User(body)
  : Promise.reject(respond('POST_USERS_FAIL'))

const post = ({ body }, res) => User
  .find({ username: body.username })
  .then(validateUser(body))
  .then(user => user.save())
  .then(({ _id: id }) => res.json(respond('POST_USERS_SUCCESS', { data: { id } })))
  .catch(error => res.json(error))

module.exports = post
