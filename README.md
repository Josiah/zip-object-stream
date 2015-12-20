# `zip-object-stream`

> Transform stream of arrays to stream of objects using the first row as keys for all subsiquent records

## API

### function ([*function* **zipper(header, row)**])

#### Params

1. zipper(*array* **header**, *array* **row**) (optional)

  - This function is called for each set of data emitted after the first. The result is passed onwards through the stream.

## Example usage

```js
var csvParse = require('csv-parse')
var zipObjectStream = require('zip-object-stream')
var fs = require('fs')

fs.createReadStream('superdata.csv')
  .pipe(csvParse())
    // provides arrays -> ['one', 'two', 'three'], ['1', '2', '3'], ['a', 'b', 'c']
  .pipe(zipObjectStream())
    // provides objects -> {one: '1', two: '2', three: '3'}, {one: 'a', two: 'b', three: 'c'}
```

# Licence

The MIT License (MIT)

Copyright (c) 2015 Josiah Truasheim

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
