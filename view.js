const mysql = require("mysql2");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Password",
  database: "ccd_db",
});



function begin() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update employee role"],
        name: "begin",
      },
    ])

    .then((answer) => {
      if (answer.begin === 'View all departments') {
        connection.query("select * FROM department", (err, res) => {
          console.table(res);
          begin();
        })
      } else if (answer.begin === 'View all roles') {
        connection.query("select * FROM role", (err, res) => {
          console.table(res);
          begin();
        })
      } else if (answer.begin === 'View all employee') {
        connection.query("select * FROM employee", (err, res) => {
          console.table(res);
          begin();
        })
        
      } else if (answer.begin === 'Add a department') {
          inquirer.prompt([{
            type: 'input',
            message: 'What is the name of the department?: ',
            name: "addDept"
          }
           
          ])

          .then((deptAnswer) => {
            connection.query("INSERT INTO department (name) VALUES (?) ", [deptAnswer.addDept], (err, res) => {
              console.table(res);
              begin();
            })
          })
      }
     
    });

}

begin();