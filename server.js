const express = require('express')
const app = express()
const api = require('./server/routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/transactionsDB')

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', api)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 4000
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})