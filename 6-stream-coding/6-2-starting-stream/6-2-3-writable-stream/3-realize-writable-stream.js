const {Writable} = require('stream')
const fs = require('fs/promises')
const {dirname} = require('path')
const mkdirp = require('mkdirp-promise')


class ToFileStream extends Writable {
  constructor (options) {
    super({...options, objectMode: true})
  }

  _write(chunk, encoding, cb) {
    mkdirp(dirname(chunk.path))
      .then(() => fs.writeFile(chunk.path, chunk.content))
      .then(() => cb())
      .catch(cb)
  }
}

module.exports = ToFileStream