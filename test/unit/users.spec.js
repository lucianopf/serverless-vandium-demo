const LambdaTester = require('lambda-tester').noVersionCheck()

const { user } = require('../../src/index')
const getUserEvent = require('../fixtures/getUser')
const postUserEvent = require('../fixtures/postUser')

describe('User', () => {
  describe('POST', () => {
    it('should work', () => {
      return LambdaTester(user)
        .event(postUserEvent)
        .expectResult(result => {
          expect(result.statusCode).toBeGreaterThanOrEqual(200)
          expect(result.statusCode).toBeLessThan(300)
        })
    })
    it('should return error if body params are not valid', () => {
      return LambdaTester(user)
        .event(Object.assign({}, postUserEvent, { body: {
          name: '123'
        }}))
        .expectResult(result => {
          expect(result.statusCode).toBeGreaterThanOrEqual(400)
          expect(result.statusCode).toBeLessThan(500)
        })
    })
  })

  describe('GET', () => {
    it('should return an array of users', () => {
      return LambdaTester(user)
        .event(getUserEvent)
        .expectResult(result => {
          expect(JSON.parse(result.body).users.length).toBeTruthy()
        })
    })
  })
})
