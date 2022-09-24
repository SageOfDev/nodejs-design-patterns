/**
 * usage1: cat sample-source | node 1-non-2-flowing-mode.js
 * usage2: just run this file
 */

process.stdin
  .on('readable', () => {
    let chunk
    console.log('New data available')
    while ((chunk = process.stdin.read()) !== null) {
      console.log(
        `Chunk read (${chunk.length} bytes): "${chunk.toString()}"`
      )
    }
  })
  .on('end', () => {console.log('End of Stream')})
