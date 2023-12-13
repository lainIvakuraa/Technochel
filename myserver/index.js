require('dotenv').config() // импорт окружения

const express = require('express')
const sequelize = require('./database')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes')
const PORT = process.env.PORT // слушаем порт из окружения

const app = express()
app.use(cors())
app.use(express.json()) // теперь можно парсить json
app.use('/api', router) // пока что тестовые маршруты

const start = async () => { // все действия с базой данных асинхронные
    try {
        await sequelize.authenticate() // с помощью неё подключаемся к бд
        await sequelize.sync() //
        app.listen(PORT, () => console.log(`Startanul server on port ${PORT}`))
    }
    catch (e) { // ловим возможные ошибки
        console.log(e)
    }
}

start()