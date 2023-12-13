// Подключение к БД

const{Sequelize} = require('sequelize') //ORM для упрощения взаимодействия с базами данных, предоставляет возможности для создания, чтения, обновления и удаления данных.

// получаем данные из файла окружения .env
module.exports = new Sequelize( // настройка конфигурации
    process.env.DB_NAME, // имя бд
    process.env.DB_USER, // пользователь бд
    process.env.DB_PASSWORD, // пароль бд
    {
        dialect: 'postgres', // указать диалект, чтобы знать, с какой СУБД работаем
        // (у различных СУБД разные синтаксисы, методы, подходы)
        host: process.env.DB_HOST, // используется локальный
        port: process.env.DB_PORT // порт бдшки
    }
)