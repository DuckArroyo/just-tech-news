// import the Sequelize constructor from the library
const Sequelize = require("sequelize");

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize("DB_NAME", "DB_USER", "DB_PW", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
