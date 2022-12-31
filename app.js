const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const members = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your manager's name?",
      name: "managername",
    },
    {
      type: "input",
      message: "What is your manager Id?",
      name: "managerid",
    },
    {
      type: "input",
      message: "What is your manager's email?",
      name: "manageremail",
    },
    {
      type: "input",
      message: "What is your manager's office number?",
      name: "officenumber",
    },
  ])
  .then((responses) => {
    const manager = new Manager(
      responses.managername,
      responses.managerid,
      responses.manageremail,
      responses.officenumber
    );

    members.push(manager);
    makeTeamMembers();
  });

function makeTeamMembers() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choosemembers",
        choices: ["Intern", "Engineer", "I am done adding team members"],
      },
    ])
    .then((responses) => {
      switch (responses.choosemembers) {
        case "Intern":
          makeIntern();
          break;
        case "Engineer":
          makeEngineer();
          break;
        default:
          makeTeam();
      }
    });
}

function makeIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internname",
        message: "what is the intern's name?",
      },
      {
        type: "input",
        name: "internid",
        message: "what is the intern's id?",
      },
      {
        type: "input",
        name: "internemail",
        message: "what is the intern's email?",
      },
      {
        type: "input",
        name: "internschool",
        message: "what is the intern's school?",
      },
    ])
    .then((responses) => {
      const intern = new Intern(
        responses.internname,
        responses.internid,
        responses.internemail,
        responses.internschool
      );
      members.push(intern);
      makeTeamMembers();
    });
}

function makeEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineername",
        message: "what is the name of the engineer?",
      },
      {
        type: "input",
        name: "engineerid",
        message: "what is the id of the engineer?",
      },
      {
        type: "input",
        name: "engineeremail",
        message: "what is the email of the engineer?",
      },
      {
        type: "input",
        name: "engineergithub",
        message: "what is the github of the engineer?",
      },
    ])
    .then((responses) => {
      const engineer = new Engineer(
        responses.engineername,
        responses.engineerid,
        responses.engineeremail,
        responses.engineergithub
      );
      members.push(engineer);
      makeTeamMembers();
    });
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

function makeTeam() {
  fs.writeFileSync(outputPath, render(members), "utf-8");
}

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ``
