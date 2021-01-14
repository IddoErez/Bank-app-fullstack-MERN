const express = require('express')
const app = express()
const api = require('./server/routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
mongoose.connect('mongodb://localhost/transactionsDB', { useNewUrlParser: true},  { useUnifiedTopology: true })

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', api)


const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})