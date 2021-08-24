const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "input",
    message: "Please create your team. What is your managers name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "Enter the managers ID",
    name: "managerId",
  },
  {
    type: "input",
  },
]);
