const mysql = require("mysql2");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
  host: "localhost",
  user: "your_username",
  password: "your_password",
  database: "your_database_name",
});

function begin() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles"],
        name: "begin",
      },
    ])

    .then((answer) => {
      console.log(answer);
    });
}
