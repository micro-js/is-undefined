/**
 * Imports
 */

var isUndefined = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.ok(isUndefined())
  t.ok(isUndefined(undefined))
  t.ok(!isUndefined(null))
  t.ok(!isUndefined('test'))
  t.ok(!isUndefined({}))
  t.ok(!isUndefined([]))
  t.ok(!isUndefined(1))
  t.end()
})
