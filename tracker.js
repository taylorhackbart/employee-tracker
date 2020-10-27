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
        roles();
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
  async function roles(){
    const view = await db.employee()
    console.table(view);
}
  async function department(){
    const view = await db.employee()
    console.table(view);
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
        message: "Please enter your role ID",
        name: "roleid"
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
      await db.addEmployee(data);
      console.log("added employee")
      init();
    })
    )
  }

  function addRole(){
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
    ])//then statement
    
    )
  }
  function updateRole(){
    return(inquirer.prompt ([

    ])//then statement
    ) 
  
  } 
init();