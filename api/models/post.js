const mongoose = require('mongoose')
const { Schema } = mongoose

const post = mongoose.model('Post', new Schema({
  body: { type: String, required: true },
  date: { type: Date, default: Date.now },
  title: { type: String, required: true },
  userID: { type: String, required: true }
}))

module.exports = post
