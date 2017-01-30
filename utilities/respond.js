const responses = {
  POST_AUTHENTICATION_SUCCESS: {
    code: 'POST_AUTHENTICATION_SUCCESS',
    message: 'Successfully authenticated.',
    status: '200'
  },
  POST_AUTHENTICATION_FAIL: {
    code: 'POST_AUTHENTICATION_FAIL',
    message: 'The provided username and/or password is invalid.',
    status: '404'
  },
  GET_COMMENTS_SUCCESS: {
    code: 'GET_COMMENTS_SUCCESS',
    message: 'Comments successfully retrieved.',
    status: '200'
  },
  POST_COMMMENTS_FAIL: {
    code: 'POST_COMMMENTS_FAIL',
    message: 'The provided postID does not correspond with an existing post.',
    status: '404'
  },
  POST_COMMENTS_SUCCESS: {
    code: 'POST_COMMMENTS_SUCCESS',
    message: 'Comment successfully created.',
    status: '200'
  },
  GET_POSTS_SUCCESS: {
    code: 'GET_POSTS_SUCCESS',
    message: 'Posts successfully retrieved.',
    status: '200'
  },
  POST_POSTS_SUCCESS: {
    code: 'POST_POSTS_SUCCESS',
    message: 'Post successfully created.',
    status: '200'
  },
  POST_USERS_FAIL: {
    code: 'POST_USERS_FAIL',
    message: 'The provided username already exists.',
    status: '409'
  },
  POST_USERS_SUCCESS: {
    code: 'POST_USERS_SUCCESS',
    message: 'User created successfully.',
    status: '200'
  },
  TOKEN_ERROR: {
    code: 'TOKEN_ERROR',
    message: 'Please provide a valid token.',
    status: '400'
  }
}

const respond = (code, data = {}) => Object.assign({}, responses[code], data)

module.exports = respond
