const connection = require("./db");
class Employee {
    constructor(firstName, lastName, roleId, managerId) {
        this.firstName = firstName;
        this.roleId = roleId;
        this.managerId =  managerId;
    }

    static async createEmployee(firstName, lastName, roleId, managerId) {

    }

    static async getAllEmployees() {
        
    }

    static async updateEmployeeRole(employeeId, roleId) {
        
    }

}

module.exports = Employee;
