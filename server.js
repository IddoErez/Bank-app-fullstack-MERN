const express = require('express')
const app = express()
const api = require('./server/routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/transactionsDB', { useNewUrlParser: true},  { useUnifiedTopology: true })
mongoose.connect("mongodb+srv://idodoerez:Tradingpostfinalproject135@cluster0.d2ipx.mongodb.net/transactionsDB?retryWrites=true&w=majority")
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
//     next()
// })

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', api)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = 4200
app.listen(process.env.PORT || PORT, function () {
    console.log(`Running on port ${port}`)
})