const post = require('./handlers/post')
const { Router } = require('express')

const users = Router().post('/users', post)

module.exports = users
