const connection = require("./connection");
//CLASS FOR CONNECTION
class DB {
  constructor(connection) {
    this.connection = connection;
  }
//VIEW ALL EMPLOYEES WITH JOIN STATEMENT
  employee() {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, manager.first_name AS manager_first, manager.last_name AS manager_last, role.salary, department.name AS department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id"
    );
  }
  //VIEW ALL ROLES WITH JOIN STATEMENT
  role() {
    return this.connection.query(
      "SELECT role.id, department.name AS department, role.title FROM role LEFT JOIN department ON role.department_id = department.id"
    );
  }
  //VIEW ALL ROLES AND DISPLAYING "NAME" FROM TABLE AS DEPARTMENT
  department() {
    return this.connection.query(
      "SELECT department.name AS department FROM department"
    );
  }
  //ADD EMPLOYEE
  addEmployee(data) {
    return this.connection.query("INSERT INTO employee SET ?", data);
  }
  //ADD ROLE
  addRole(data) {
    return this.connection.query("INSERT INTO role SET ?", data);
  }
  //UPDATE ROLE
  updateRole(roleid, employeeid) {
    return this.connection.query("UPDATE employee SET role_id = ? WHERE id= ?", [roleid, employeeid]);
  }
  //DELETE EMPLOYEE
  deleteEmployee(id){
    return this.connection.query("DELETE FROM employee WHERE id = ?", id)
  }
} 
module.exports = new DB(connection);
