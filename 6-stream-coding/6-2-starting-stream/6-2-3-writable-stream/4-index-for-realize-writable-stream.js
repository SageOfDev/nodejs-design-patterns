const {join} = require('path')
const ToFileStream = require('./3-realize-writable-stream')
const tfs = new ToFileStream()

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
