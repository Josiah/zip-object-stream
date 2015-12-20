'use strict'

var Test = require('tape')
var ZipObjectStream = require('..')

Test('Handle errors in zipper', function (test) {
  test.plan(1)
  var expectedError = new Error()

  var stream = ZipObjectStream(function () {
    throw expectedError
  })

  stream.on('error', function (actualError) {
    test.equal(actualError, expectedError, 'error should be emitted to the stream')
  })

  stream.on('data', test.fail)
  stream.on('end', test.end)

  stream.write(['one', 'two', 'three'])
  stream.write([1, 2, 3])
  stream.end()
})
