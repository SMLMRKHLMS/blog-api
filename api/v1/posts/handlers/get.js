const Post = require('./../../../models/post')
const respond = require('./../../../../utilities/respond')

const get = ({ params }, res) => Post
  .find(params._id ? params : {})
  .then(data => res.json(respond('GET_POSTS_SUCCESS', { data })))
  .catch(error => res.json(error))

module.exports = get
