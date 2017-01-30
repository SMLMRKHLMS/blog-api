const Comment = require('./../../../models/comment')
const respond = require('./../../../../utilities/respond')

const get = ({ params }, res) => Comment
  .find(params._id ? params : {})
  .then(data => res.json(respond('GET_COMMENTS_SUCCESS', { data })))
  .catch(error => res.json(error))

module.exports = get
