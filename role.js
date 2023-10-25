const connection = require("./db");

class Role {
    constructor(title, salary, departmentId) {
        this.title = title;
        this.salary = salary;
        this.departmentId = departmentId;
    }

    static async createRole(title,salary,departmentId) {

    }

    static async getAllRoles() {

    }
}

module.exports = Role;
