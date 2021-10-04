// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js');

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
    type: 'list',
    message: 'Licenses:',
    name: 'license',
    choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPL v3', 'GNU GPL v3', 'GNU LGPL v3', 'ISC License', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense'],
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
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generate.generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('README Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(
      questions
    )
    .then((data) => {
      const fileName = 'README.md';
      writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
