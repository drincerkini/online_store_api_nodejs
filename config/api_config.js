require('dotenv').config();

const MONGO_CONNECTION_URI = process.env.MONGO_CONNECTION_URI;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;
const API_PORT = process.env.API_PORT;

module.exports = {
    MONGO_CONNECTION_URI,
    MONGO_DB_NAME,
    API_PORT
}