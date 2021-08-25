const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const inquirer = require("inquirer");

const employees = [];

init();

function init() {
  renderManager();
}

function renderManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        message: "Enter an employee ID",
        name: "id",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        message: "Enter an email",
        name: "email",
        validate: (answer) => {
          const pass = answer.match(/\S+@\S+\.\S+/);
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        },
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "office",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.office
      );
      employees.push(manager);
      anotherMember();
    });
}

function renderEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        message: "Enter an employee ID",
        name: "id",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        message: "Enter an email",
        name: "email",
        validate: (answer) => {
          const pass = answer.match(/\S+@\S+\.\S+/);
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        },
      },
      {
        type: "input",
        message: "What is your Github username?",
        name: "github",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      employees.push(engineer);
      anotherMember();
    });
}

function renderIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        message: "Enter an employee ID",
        name: "id",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        message: "Enter an email",
        name: "email",
        validate: (answer) => {
          const pass = answer.match(/\S+@\S+\.\S+/);
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        },
      },
      {
        type: "input",
        message: "What school did you attend?",
        name: "school",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      employees.push(intern);
      anotherMember();
    });
}

function anotherMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add another team member?",
        choices: ["Engineer", "Intern", "None"],
        name: "type",
      },
    ])
    .then((response) => {
      switch (response.type) {
        case "Engineer":
          renderEngineer();
          break;
        case "Intern":
          renderIntern();
          break;
        default:
          generateHTML();
          break;
      }
    });
}

function generateHTML() {
  function writeToFile() {
    fs.writeFile("./dist/index.html");
  }

  console.log(employees);
  const filterManager = employees.filter((em) => em.getRole() === "Manager");

  const filterIntern = employees.filter((em) => em.getRole() === "Intern");

  const filterEngineer = employees.filter((em) => em.getRole() === "Engineer");
  console.log(filterEngineer);
  console.log(filterIntern);
  console.log(filterManager);
  const htmlManager = filterManager.map((item) => {
    return `<div>`;
  });

  const htmlIntern = filterIntern.map((item) => {
    return ``;
  });

  const htmlEngineer = filterEngineer.map((item) => {
    return ``;
  });
}
