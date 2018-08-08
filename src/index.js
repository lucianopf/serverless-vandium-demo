'use strict'

const vandium = require( 'vandium' )

const users = [
  {
    id: 1,
    name: 'foo'
  },
  {
    id: 2,
    name: 'bar'
  },
]

module.exports.user = vandium.api()
  // Enabling cors from everywhere  
  .cors({ allowOrigin: '*' })

  // JWT parsing method, if no valid token is provided it will thrown an unouthorized error,
  // otherwise it will open the JWT and insert at `event.jwt`
  // .jwt({ algorithm: 'HS256', secret: <JWT_SECRET_KEY> })

  // Using this route both for `/user` and `/user/${id}`
  .GET((event) => {
    if (event.pathParameters && event.pathParameters.id) {
      return [{}].concat(users.filter(user => user.id === parseInt(event.pathParameters.id))).pop()
    }
    return { users }
  })

  // Demo of the vandium input validation
  .POST({
    body: {
      name: vandium.types.string().min(4).max(200).required()
    }
  }, event => {
    return {
      created: true
    }
  })