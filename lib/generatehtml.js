const fs = require("fs");

function generateHTML() {
  //     function

  //     <!DOCTYPE html>
  // <html lang="en">
  //   <head>
  //     <meta charset="UTF-8" />
  //     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     <link
  //       rel="stylesheet"
  //       href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
  //     />
  //     <link rel="stylesheet" href="./style.css" />
  //     <title>Team Profile Generator</title>
  //   </head>
  //   <body>
  //     <nav>
  //       <div class="header">My Team</div>
  //     </nav>

  //   </body>
  // </html>

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

module.exports = generateHTML;
