const fs = require('fs')
const path = require('path')
const Felid = require('../src')

const app = new Felid({
  key: fs.readFileSync(path.resolve(__dirname, '../test/https/felid.key')),
  cert: fs.readFileSync(path.resolve(__dirname, '../test/https/felid.cert'))
})

app.get('/', (req, res) => {
  res.send('hello felid')
})

app.listen(8080, () => {
  console.log(`felid server listen on ${app.address.port}`)
})
