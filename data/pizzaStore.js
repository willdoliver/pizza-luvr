const Sequelize = require('sequelize')

const database = 'pizza_luvrs'
const host = 'pizza-db2.c1pqqcot4rry.sa-east-1.rds.amazonaws.com'
const username = 'admin'
const password = 'admin123'

const pgClient = new Sequelize(
    database,
    username,
    password,
    {
        host: host,
        dialect: 'mysql'
    }
)

const Pizza = pgClient.define('pizza', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
    },
    toppings: {
        type: Sequelize.STRING,
    },
    img: {
        type: Sequelize.STRING,
    },
    username: {
        type: Sequelize.STRING,
    },
    created: {
        type: Sequelize.BIGINT,
    }
})

Pizza.sync().then(() => {
    console.log('mysql ready man')
})

module.exports = Pizza