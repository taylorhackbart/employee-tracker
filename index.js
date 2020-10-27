const connection = require("./connection");


class DB {
  constructor(connection){
    this.connection = connection
  }
  employee(){
    return this.connection.query("SELECT * FROM employee")
  }
  role(){
    return this.connection.query("SELECT * FROM role")
  }  
  department(){
    return this.connection.query("SELECT * FROM department")
  }  
  addEmployee(data){
    return this.connection.query("INSERT INTO employee SET ?", data)
  }
  addRole(data){
    return this.connection.query("INSERT INTO role SET ?", data)
  }
  updateRole(data){
    return this.connection.query("INSERT INTO role SET ?", data)
  }

}
module.exports = new DB(connection);