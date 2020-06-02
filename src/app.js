const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const magnet = require('magnet')

const app = express()
const port = process.env.SERVER_PORT || 9090

app.use(bodyParser.json({ limit: '2000kb' }))
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.post('/magnet', (req, res, next) => {
  const magnetStr = req.body.magnet
  magnet.getMagnet(magnetStr).then(magnetResult => {
    res.json({
      data: magnetResult,
      code: 200
    })
  }).catch(err => {
    res.json({
      msg: err.message,
      code: -1
    })
  })
})

app.post('/hash', (req, res, next) => {
  const infoHash = req.body.hash
  magnet.getMagnetByInfoHash(infoHash).then(magnetResult => {
    res.json({
      data: magnetResult,
      code: 200
    })
  }).catch(err => {
    res.json({
      msg: err.message,
      code: -1
    })
  })
})

app.use('/', (req, res, next) => {
  res.render('index', {})
})


app.listen(port, () => {
  console.log('server start on ' + port)
})