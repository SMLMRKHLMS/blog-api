const get = require('./handlers/get')
const post = require('./handlers/post')
const { Router } = require('express')

const comments = Router()
  .get('/comments/:_id?', get)
  .post('/comments', post)

module.exports = comments
