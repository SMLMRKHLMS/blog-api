const mongoose = require('mongoose')
const { Schema } = mongoose

const comment = mongoose.model('Comment', new Schema({
  body: { type: String, required: true },
  date: { type: Date, default: Date.now },
  postID: { type: String, required: true },
  username: { type: String, required: true }
}))

module.exports = comment
