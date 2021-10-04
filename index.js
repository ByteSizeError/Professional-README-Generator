// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
    choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'ISC License', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense'],
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
  fs.writeFile(fileName, `# ${data.title}\n`, (err) =>
    err ? console.log(err) : console.log('Title Success!')
  );
  fs.appendFile(fileName, `## Description\n ${data.description}\n`, (err) =>
    err ? console.log(err) : console.log('Description Success!')
  );

  fs.appendFile(fileName, `## Table of Contents\n
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)\n`
    , (err) =>
      err ? console.log(err) : console.log('Table of Contents Success!')
  );
  fs.appendFile(fileName, `## Installation\n ${data.installation}\n`, (err) =>
    err ? console.log(err) : console.log('Installation Success!')
  );
  fs.appendFile(fileName, `## Usage\n ${data.usage}\n`, (err) =>
    err ? console.log(err) : console.log('Usage Success!')
  );

  // add license

  fs.appendFile(fileName, `## How to Contribute\n ${data.contributing}\n`, (err) =>
    err ? console.log(err) : console.log('Contributing Success!')
  );
  fs.appendFile(fileName, `## Tests\n ${data.tests}\n`, (err) =>
    err ? console.log(err) : console.log('Tests Success!')
  );
  fs.appendFile(fileName, `## Questions\n https://github.com/${data.username}\n You can also reach me at ${data.email} for additional questions.`, (err) =>
    err ? console.log(err) : console.log('Questions Success!')
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
