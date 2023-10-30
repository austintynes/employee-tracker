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
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update employee role",
        ],
        name: "begin",
      },
    ])

    .then((answer) => {
      if (answer.begin === "View all departments") {
        connection.query("select * FROM department", (err, res) => {
          console.table(res);
          begin();
        });
      } else if (answer.begin === "View all roles") {
        connection.query("select * FROM role", (err, res) => {
          console.table(res);
          begin();
        });
      } else if (answer.begin === "View all employees") {
        connection.query("select * FROM employee", (err, res) => {
          console.table(res);
          begin();
        });
      } else if (answer.begin === "Add a department") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the name of the department?: ",
              name: "addDept",
            },
          ])

          .then((deptAnswer) => {
            connection.query(
              "INSERT INTO department (name) VALUES (?) ",
              [deptAnswer.addDept],
              (err, res) => {
                console.table(res);
                begin();
              }
            );
          });
      } else if (answer.begin === "Add a role") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the name of the department?: ",
              name: "addRole",
            },
          ])

          .then((roleAnswer) => {
            connection.query(
              "INSERT INTO role (name) VALUES (?) ",
              [roleAnswer.addRole],
              (err, res) => {
                console.table(res);
                begin();
              }
            );
          });
      } else if (answer.begin === "Add an employee") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the first name of the employee?: ",
              name: "empFirst",
            },

            {
              type: "input",
              message: "What is the last name of the employee?: ",
              name: "empLast",
            },

            {
              type: "list",
              message: "What is the employee role_id: ",
              name: "empLast",
            },
          ]) 

          .then((emplAnswer) => {
            connection.query(
              "INSERT INTO employees (name) VALUES (?) ",
              [emplAnswer.empFirst, emplAnswer.empLast],
              (err, res) => {
                console.table(res);
                begin();
              }
            );
          });
      }
    });
}

begin();
