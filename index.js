#!/usr/bin/env node

'use strict'

const app = require('./app')

app.listen('3030', () => console.log(`Server started on port 3030`))
   .on('error', err => console.log('ERROR: ', err))
