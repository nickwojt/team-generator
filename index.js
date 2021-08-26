const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const inquirer = require("inquirer");
const fs = require("fs");

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
  const filterManager = employees.filter((em) => em.getRole() === "Manager");

  const filterIntern = employees.filter((em) => em.getRole() === "Intern");

  const filterEngineer = employees.filter((em) => em.getRole() === "Engineer");

  const htmlManager = filterManager.map((item) => {
    return `<div class="card m-4 text-light" style="width: 24rem">
    <div class="card-header bg-success">
    <h3>${item.name}</h3>
    <div class="d-flex flex-row">
    <p class="m-2">Manager</p>
    </div>
    </div>
    <ul class="list-group list-group-flush text-dark">
    <li class="list-group-item">ID: ${item.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${item.email}" target="no_blank">${item.email}</a></li>
    <li class="list-group-item">Office Number = ${item.officeNumber}</li>
    </ul>
    </div>`;
  });

  const htmlIntern = filterIntern.map((item) => {
    return `<div class="card m-4 text-light" style="width: 24rem">
    <div class="card-header bg-info">
      <h3>${item.name}</h3>
      <div class="d-flex flex-row">
        <p class="m-2">Intern</p>
      </div>
    </div>
    <ul class="list-group list-group-flush text-dark">
      <li class="list-group-item">ID: ${item.id}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${item.email}" target="no_blank">${item.email}</a>
    </li>
      <li class="list-group-item">School: ${item.school}</li>
    </ul>
  </div>`;
  });

  const htmlEngineer = filterEngineer.map((item) => {
    return `
    <div class="card m-4 text-light" style="width: 24rem">
      <div class="card-header bg-warning">
        <h3>${item.name}</h3>
      <div class="d-flex flex-row">
        <p class="m-2">Engineer</p>
      </div>
    </div>
    <ul class="list-group list-group-flush text-dark">
      <li class="list-group-item">ID: ${item.id}</li>
      <li class="list-group-item">
          Email: <a href="mailto:${item.email}" target="no_blank">${item.email}</a>
      </li>
      <li class="list-group-item">
        GitHub = <a href="https://github.com/${item.github}" target="no_blank">${item.github}</a>
    </li>
    </ul>
  </div>`;
  });

  let trees = "";

  const pushManager = htmlManager.forEach((item) => {
    trees += item;
  });
  const pushIntern = htmlIntern.forEach((item) => {
    trees += item;
  });
  const pushEngineer = htmlEngineer.forEach((item) => {
    trees += item;
  });

  const renderHTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./style.css" />
    <title>Team Profile Generator</title>
  </head>
  <body>
    <nav>
      <div class="header">My Team</div>
    </nav>
    <main
      class="
        container
        d-flex
        flex-row
        justify-content-center
        align-items-center
        col-10
      "
    >
      <div class="row cardContainer">${trees}</div>
    </main>
    <script src="../index.js"></script>
  </body>
</html>`;

  fs.writeFile("./dist/index1.html", renderHTML, (err) => {
    err ? console.error(err) : console.log("Data was written Successfully");
  });
}
