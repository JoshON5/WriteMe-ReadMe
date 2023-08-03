// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const markdowns = require('./Develop/utils/generateMarkdown')
const license = ["N/A", "MIT", "Apache", "GNU-GPL"]
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([      
{type: 'input',
name: 'title',
message: 'What is your applications title?',
},
{
type: 'input',
name: 'description',
message: 'Describe your application succintly:',
},
{
type: 'input',
name: 'installation',
message: 'If you application needs to be installed, explain how:',
},
{
type: 'input',
name: 'usage',
message: 'Explain how to use the application:',
},
{
type: 'input',
name: 'credits',
message: 'List any authors that contributed to the application:',
},
{
type: 'list',
name: 'license',
message: 'Choose the license you used for the application:',
choices: license
},
{
type: 'input',
name: 'email',
message: 'Enter in your preferred email for contacting:',
},
{
type: 'input',
name: 'username',
message: 'Enter in your GitHub username:',
},
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err.message) : console.log("README.md was successfully generated!")
    });
}

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then (answers => writeToFile("./Develop/README.md", markdowns(answers)))
};

// Function call to initialize app
init();
