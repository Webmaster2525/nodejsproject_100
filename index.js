const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello John!, This is Home Page')
})

app.get('/about', (req, res) => {
  res.send('Hello John!, This is About Page')
})

app.get('/contact', (req, res) => {
  res.send('Hello John!, This is Contact Page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
