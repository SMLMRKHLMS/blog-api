## Blog API

### Directions

1. `git clone git@github.com:SMLMRKHLMS/blog-api.git`
2. `cd` into the `blog-api` repo.
3. Run `npm install && npm start`.
4. Create a user by running the following command to create a new user:
```
curl -H "Content-Type: application/json" -X POST -d '{"username": "test123", "password": "letmein123", "firstName": "Test", "lastName": "Tester"}' http://localhost:8080/api/v1/users
```
5. Authenticate said user:
```
curl -H "Content-Type: application/json" -X POST -d '{"username": "test123", "password": "letmein123"}' http://localhost:8080/api/v1/authenticate
```
6. Copy the token
7. Create a post:
```
curl -H "Content-Type: application/json" -H "x-access-token: COPIED_TOKEN" -X POST -d '{"title": "This is a test post.", "body": "This is test content."}' http://localhost:8080/api/v1/posts
```
8. Get posts:
```
curl -H "Content-Type: application/json" -X GET http://localhost:8080/api/v1/posts
```
9. Copy one of the post's `_id`.
10. Create a comment:
```
curl -H "Content-Type: application/json" -X POST -d '{"postID": "COPIED ID", "username": "Test username.", "body": "This is test content."}' http://localhost:8080/api/v1/comments
```
11. Get comments:
```
curl -H "Content-Type: application/json" -X GET http://localhost:8080/api/v1/comments
```

### API

1. Authenticate
  * `POST /api/v1/authenticate`: requires that you provide a `username` and `password`. If these are valid, then it will return you back a token you can then use to pass as a header (`x-access-token`).
2. Comments
  * `GET /api/v1/comments/:id?`: Returns you back an array of comments. You can optionally pass append an `id` to the url, which will return you a single comment, which has said `id`.
  * `POST /api/v1/comments`: Used for creating new comments. It is required that you pass an associated `postID`, `username`, and `body` into the request body.
3. Posts
  * `GET /api/v1/posts/:id?`: Returns you back an array of posts. You can optionally append an `id` to the url, which will return you a single post.
  * `POST /api/v1/posts`: Used for creating new posts. This endpoint is authenticated against an `x-access-token`, which needs to be passed in as a header. It is required that you also pass `title` and `body` into the body of the request.
4. Users
  * `POST /api/v1/users`: This endpoint is used for creating new users. Requires `username`, `password`, `firstName`, and `lastName` to be passed into the body of the request.
