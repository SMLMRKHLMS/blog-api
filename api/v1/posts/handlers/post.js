const Post = require('./../../../models/post')
const respond = require('./../../../../utilities/respond')

const post = ({ body, userID }, res) =>
  new Post(Object.assign({}, { userID }, body))
    .save()
    .then(data => res.json(respond('POST_POSTS_SUCCESS', { data })))
    .catch(error => res.json(error))

module.exports = post
