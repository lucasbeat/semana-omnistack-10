const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://lucas:admin@cluster0-mkl6t.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3001, () => {
    console.log('servidor rodando')
})