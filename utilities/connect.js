const mongoose = require('mongoose')
mongoose.Promise = Promise

const connect = database => () => mongoose.connect(database)

module.exports = connect
