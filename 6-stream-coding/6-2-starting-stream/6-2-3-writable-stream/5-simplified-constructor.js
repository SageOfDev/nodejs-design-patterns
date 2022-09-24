const {Writable} = require('stream')
const fs = require('fs/promises')
const {dirname, join} = require('path')
const mkdirp = require('mkdirp-promise')


const tfs = new Writable({
  objectMode: true,
  write(chunk, encoding, cb) {
    mkdirp(dirname(chunk.path))
      .then(() => fs.writeFile(chunk.path, chunk.content))
      .then(() => cb())
      .catch(cb)
  }
})

tfs.write({
  path: join('files', 'file1.txt'), content: 'Hello'
})
tfs.write({
  path: join('files', 'file2.txt'), content: 'Node.js'
})
tfs.write({
  path: join('files', 'file3.txt'), content: 'streams'
})
tfs.end(() => console.log('All files created'))
