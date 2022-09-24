const {createServer} = require('http')
const Chance = require('chance')

const chance = new Chance()
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  while (chance.bool({likelihood: 95})) {
    res.write(`${chance.string()}\n`)
  }
  res.end('\n\n')
  res.on('finish', () => console.log('All data sent'))
})
server.listen(8080, () => {
  console.log('listening on http://localhost:8080')
})
