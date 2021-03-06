/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../server/db/index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
          fName: 'Cody',
          lName: 'thePug',
          address: '1000 fullstack ave',
          email: 'cody@puppybook.com',
          password: 'bones'
        })
      })
      it('defaults user admin priviledge to false', () => {
        expect(cody.isAdmin).to.be.equal(false)
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
