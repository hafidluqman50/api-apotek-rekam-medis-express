import dotenv from 'dotenv'
import mysql from 'mysql'
import pg from 'pg'
import {Sequelize} from 'sequelize'
dotenv.config()

const db_name     = process.env.DB_NAME
const db_username = process.env.DB_USERNAME
const db_password = process.env.DB_PASSWORD
const db_host     = process.env.DB_HOST
const db_port     = process.env.DB_PORT

const sequelize = new Sequelize(
    db_name,
    db_username,
    db_password,
    {
        host:db_host,
        dialect:'postgres',
        dialectModule:pg
    }
)

// sequelize.authenticate().then(() => {
//    console.log('Connection has been established successfully.');
// }).catch((error) => {
//    console.error('Unable to connect to the database: ', error);
// });

export {sequelize}