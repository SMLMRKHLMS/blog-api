const post = require('./handlers/post')
const { Router } = require('express')

const authenticate = Router().post('/authenticate', post)

module.exports = authenticate
