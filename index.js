const express = require('express')
const colors = require('colors')
const cors = require('cors')
const app = express()
const PORT = 5000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello Express !!')
})

app.listen(PORT, () => {
  console.log(`Server up and running on http://localhost:${PORT}`.yellow.bold)
})