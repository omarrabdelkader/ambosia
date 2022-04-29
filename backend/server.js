const express = require('express')
const cors = require('cors')
const app = express()
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT
const conn = require('./Config/db')
conn()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/menu', require('./Route/menuRoute'))


app.listen(port, () => {
    console.log(`Server has been connected at port: ${port}`.yellow.underline)
})