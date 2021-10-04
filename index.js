// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Project Title:',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Description:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Installation Instructions:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Usage Information:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Contribution Guidelines:',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Test Instructions:',
    name: 'tests',
  },
  {
    type: 'checkbox',
    message: 'Licenses:',
    name: 'license',
    choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    type: 'input',
    message: 'GitHub Username:',
    name: 'username',
  },
  {
    type: 'input',
    message: 'Email:',
    name: 'email',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(
      questions
    )
    .then((response) =>
      response.confirm === response.password
        ? console.log('Success!')
        : console.log('Failure in creating README')
    );
}

// Function call to initialize app
init();
