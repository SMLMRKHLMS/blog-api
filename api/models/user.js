const mongoose = require('mongoose')
const { Schema } = mongoose

const user = mongoose.model('User', new Schema({
  date: { type: Date, default: Date.now },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true }
}))

module.exports = user
