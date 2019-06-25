#!/usr/bin/env node

const express = require('express')
const app = express()
const port = 3200

app.get('/', (req, res) => {
  console.log('returning index')
  res.send('')
})

app.get('/hello', (req, res) => {
  console.log('returning index')
  res.send('Hello World!')
})

// https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md
/* istanbul ignore next */
require('@cypress/code-coverage/middleware')(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
