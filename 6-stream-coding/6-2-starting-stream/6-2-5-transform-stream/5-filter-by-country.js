const {Transform} = require('stream')

class FilterByCountry extends Transform {
  constructor (country, options = {}) {
    options.objectMode = true
    super(options)
    this.country = country
  }

  _transform(record, encoding, callback) {
    if (record.country === this.country) {
      this.push(record)
    }
    callback()
  }
}

module.exports = {FilterByCountry}
