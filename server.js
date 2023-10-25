const mysql = require("mysql2");

const connection = mysql.createconection({
    host: "localhost",
    user: "your_username",
    password: "your_password",
    database: "your_database_name"
});

module.exports = connection;

