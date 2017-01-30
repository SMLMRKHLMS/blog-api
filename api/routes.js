const authenticate = require('./v1/authenticate/authenticate')
const comments = require('./v1/comments/comments')
const posts = require('./v1/posts/posts')
const use = require('./../utilities/use')
const users = require('./v1/users/users')

const routes = apiPath => app => Promise
  .resolve(app)
  .then(use(apiPath, authenticate))
  .then(use(apiPath, comments))
  .then(use(apiPath, posts))
  .then(use(apiPath, users))
  .catch(console.error)

module.exports = routes
