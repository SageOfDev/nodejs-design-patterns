const {createReadStream, createWriteStream} = require('fs')
const {createGunzip} = require('zlib')

const filename = process.argv[2]
console.log(filename)
const destFilename = filename.replace(/.gz$/, '')


createReadStream(filename)
  .pipe(createGunzip())
  .pipe(createWriteStream(destFilename))
  .on('finish', () => console.log('finish'))
