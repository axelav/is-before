var test = require('tape')
var isBefore = require('./index')

test('isBefore test', function (t) {
  t.plan(3)

  t.equal(typeof isBefore, 'function')
  var now = new Date('1/1/1990')
  var later = new Date()
  t.equal(isBefore(now, later), true)
  t.equal(isBefore(later, now), false)
})


