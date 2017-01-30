const Comment = require('./../../../models/comment')
const Post = require('./../../../models/post')
const respond = require('./../../../../utilities/respond')

const validatePost = body => post => post.length
  ? new Comment(body)
  : Promise.reject(respond('POST_COMMMENTS_FAIL'))

const post = ({ body }, res) => Post
  .find({ _id: body.postID })
  .then(validatePost(body))
  .then(comment => comment.save())
  .then(data => res.json(respond('POST_COMMENTS_SUCCESS', { data })))
  .catch(error => res.json(error))

module.exports = post
