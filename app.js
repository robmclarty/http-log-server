'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.disable('x-powered-by')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', (req, res, next) => {
  console.log('Request received.')

  if (req.body) console.log('body: ', JSON.stringify(req.body, null, 2))
  if (req.query) console.log('query:', JSON.stringify(req.query, null, 2))

  res.json({
    ok: true,
    message: 'Request received.'
  })
})

module.exports = app
