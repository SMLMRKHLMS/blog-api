const get = require('./handlers/get')
const post = require('./handlers/post')
const verify = require('./../../verify')
const { Router } = require('express')

const posts = Router()
  .get('/posts/:_id?', get)
  .post('/posts', verify, post)

module.exports = posts
