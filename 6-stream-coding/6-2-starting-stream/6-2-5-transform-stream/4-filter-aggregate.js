const {createReadStream} = require('fs')
const {parse} = require('csv-parse')
const {FilterByCountry} = require('./5-filter-by-country')
const {SumProfit} = require('./6-sum-profit')

const csvParser = parse({columns: true})

createReadStream('data.csv')
  .pipe(csvParser)
  .pipe(new FilterByCountry('Italy'))
  .pipe(new SumProfit())
  .pipe(process.stdout)
