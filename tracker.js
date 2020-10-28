const inquirer = require("inquirer");
const db = require("./index")
require("console.table");

function init(){
  inquirer.prompt (
    {
      type: "list",
      name: "search",
      message: "What would you like to do?",
      choices: [        
      "View All Employees",
      "View All Roles",
      "View All Departments",
      "Add Employee",
      "Add Role",
      "Update Employee's Role",
      "Exit"]
    }
  )
  .then(function(res){
    switch (res.search){
      case "View All Employees": 
        employee()
        break;
      case "View All Roles":
        role();
        break;
      case "View All Departments":
        department();
        break;
      case "Add Employee":
        addEmp();
        break;
      case "Add Role":
        addRole();
        break;
      case "Update Employee's Role":
        updateRole();
        break;
      default:
        process.exit();
        
    }
    });
  }
  async function employee(){
    const view = await db.employee()
    console.table(view);
    init();
}
  async function role(){
    const view = await db.role()
    console.table(view);
    init();
}
  async function department(){
    const view = await db.department()
    console.table(view);
    init();
}
  async function addEmp(){
    return (inquirer.prompt([
      {
        type: "input",
        message: "Please enter a first name",
        name: "firstname"
      },
      {
        type: "input",
        message: "Please enter a last name",
        name: "lastname"
      },
      {
        type: "input",
        message: "Please select your role",
        name: "role"
      },
      {
        type: "input",
        message: "Please enter your managers ID",
        name: "managerid"
      }
    ]).then(answers => {
      const data = 
       {
        first_name: answers.firstname, 
        last_name: answers.lastname, 
        role_id: answers.roleid, 
        manager_id: answers.managerid
      } 
       db.addEmployee(data);
      console.log("Employee added")
      init();
    })
    )
  }

  async function addRole(){
    return (inquirer.prompt ([
      {
        type: "input",
        message: "Please enter a role title",
        name: "title"
      },
      {
        type: "input",
        message: "Please enter a salary for this role",
        name: "salary"
      },
      {
        type: "list",
        message: "What department is this role in?",
        name: "department",
        choices: ["Sales", "Engineering", "Finance", "Legal"]
      }
    ]).then(answers => {
      const data = 
       {
        title: answers.title, 
        salary: answers.salary, 
        department_id: answers.department, 
      } 
       db.addRole(data);
      console.log("Employee added")
      init();
    })
    
    )
  }
  async function updateRole(){
    return(inquirer.prompt ([
      {
        type: "list",
        name: "role",
        message: "What is this employee's new role?",
        choices: ["Sales", "Finance", "Legal", "Engineer"]
      }
    ]).then(answer =>{

    })
    ) 
  
  } 
init();