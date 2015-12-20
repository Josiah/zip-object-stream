'use strict'

var MapStream = require('map-stream')
var ZipObject = require('zip-object')

module.exports = function (zipper) {
  var headers

  if (!zipper) {
    zipper = ZipObject
  }

  return MapStream(function (row, next) {
    // The first row of data is stored as headers
    if (headers === undefined) {
      headers = row
      return next()
    }

    var data = zipper(headers, row)
    return next(null, data)
  })
}
