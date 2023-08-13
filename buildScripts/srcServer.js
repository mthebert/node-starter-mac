import express from 'express'
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import config from '../webpack.config.dev'

import { fileURLToPath } from 'url'

const port = 3001
const app = express()
const compiler = webpack(config)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
  }),
)

// routes
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, function (err) {
  if (err) {
    console.log(err)
  } else {
    open('http://localhost:' + port)
  }
})
