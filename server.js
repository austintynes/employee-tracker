const mysql = require("mysql2");

const connection = mysql.createconection({
    host: "localhost",
    user: "root",
    password: "Password",
    database: "ccd_db"
});

module.exports = connection;

