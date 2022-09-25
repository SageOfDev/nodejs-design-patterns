const {Transform} = require('stream')

export class ReplaceStream extends Transform {
  constructor (searchStr, replaceStr, options) {
    super({...options})
    this.searchStr = searchStr
    this.replaceStr = replaceStr
    this.tail = ''
  }

  _transform(chunk, encoding, callback) {
    const pieces = (this.tail + chunk).split(this.searchStr)
    const lastPiece = pieces[pieces.length - 1]
    const tailLen = this.searchStr.length - 1

  }
}