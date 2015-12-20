'use strict'

var Test = require('tape')
var ZipObjectStream = require('..')

Test('Use csv first row as headers', function (test) {
  test.plan(1)

  var stream = ZipObjectStream()

  stream.on('data', function (data) {
    test.deepEqual(data, {one: 1, two: 2, three: 3}, 'the first row should be mapped to values')
  })

  stream.on('end', function () {
    test.end()
  })

  stream.write(['one', 'two', 'three'])
  stream.write([1, 2, 3])
  stream.end()
})
