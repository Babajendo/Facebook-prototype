require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const sequelize = require('./config/db')




const User = require('./models/userModels');

sequelize.sync

























































































// app.get('/', (req, res) => res.send("Hello World!"))

const dbConnection = async() => {
    try {
        await sequelize.authenticate()
        app.listen(PORT, () => {
        console.log(`This facebook app is listening on port ${PORT}`)
        })
    }   catch (error) {
        console.log('Error: ' + error)
        }
}

dbConnection()
