const connection = require("./connection");


class DB {
  constructor(connection){
    this.connection = connection
  }

  employee(){
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, manager.first_name AS manager_first, manager.last_name AS manager_last, role.salary, department.name AS department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id")
    
  }
  role(){
    return this.connection.query("SELECT department.name AS department, role.title FROM role LEFT JOIN department ON role.department_id = department.id")
  }  
  department(){
    return this.connection.query("SELECT department.name AS department FROM department")
  }  
  addEmployee(data){
    return this.connection.query("INSERT INTO employee SET ?", data)
  }
  addRole(data){
    return this.connection.query("INSERT INTO role SET ?", data)
  }
  updateRole(data){
    return this.connection.query("SELECT * FROM role, SELECT * FROM employee,INSERT INTO role SET ?", data)
  }

}
module.exports = new DB(connection);