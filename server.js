const browserify = require('browserify-middleware')
const express = require('express')
const app = express()
const path = require('path')

app.get('/entrypoint.js', browserify(path.join(__dirname, 'index.js')))
app.use(express.static('public'))

app.listen(3500)
