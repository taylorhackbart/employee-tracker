// const database = require("./trackerdb")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const employeeArr = [];

function fullFunc (){

  function promptDepartment(){
    return (inquirer.prompt([
      {
        type: "input",
        message: "Please enter a department name to add",
        name: "name"
      },
    ]) //then statement here
    .then(promptRole())
    )
  }
  function promptRole(){
    return (inquirer.prompt ([
      {
        type: "input",
        message: "Please enter a role title",
        name: "title"
      },
      {
        type: "input",
        message: "Please enter your salary",
        name: "salary"
      },
      {
        type: "input",
        message: "Please enter a department ID",
        name: "id"
      }
    ])//then statement
    .then(promptEmployee())
    )
  }
  function promptEmployee(){
    return(inquirer.prompt ([
      {
        type: "input",
        message: "Please enter your first name",
        name: "firstname"
      },
      {
        type: "input",
        message: "Please enter your last name",
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
    ])//then statement
    ) 
  
  } promptDepartment();
} fullFunc();