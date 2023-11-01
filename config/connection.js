const Sequelize = require('sequelize');

require('dotenv').config(); // Load environment variables

const DB_NAME = process.env.DB_NAME || 'mvc_blog';
const DB_USER = process.env.DB_USER || 'user';
const DB_PASSWORD = process.env.DB_PASSWORD || 'password';
const sequelize = new Sequelize(
  DB_NAME, // Name of your database
  DB_USER, // Your MySQL username
  DB_PASSWORD, // Your MySQL password
  {
    host: 'localhost', // Your database host
    dialect: 'mysql', // Specify the database dialect
    port: 3306, // The port your MySQL server is running on
  }
);

module.exports = sequelize;