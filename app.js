'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.disable('x-powered-by')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', (req, res, next) => {
  console.log('Requests received:')
  console.log(JSON.stringify(req.body, null, 2))

  res.json({
    ok: true,
    message: 'Request received.'
  })
})

module.exports = app
