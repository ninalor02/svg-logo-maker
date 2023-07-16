const inquirer = require("inquirer");
const fs = require('fs');
const {generateSVG} = require("./lib/generateSVG");
const {generateShape} = require("./lib/generateShape");

inquirer
.prompt = [
    { 
    type: 'list',
    name: 'shape',
    message: 'Please choose which shape?',
    choices: ['circle', 'triangle', 'square'],
},
{   
    type: 'input',
    name: 'shape-color',
    message: 'Please enter in a desire color?',
},
{   
    type: 'list',
    name: 'text',
    message: 'Please enter in 3(Three) letters in CAPS?',
},
{
    type: 'list',
    name: 'text-color',
    message: 'Please enter a color that you would like the text to be?',
    choices: ['circle', 'triangle', 'square'],
},
]
.then((data) => {
    const svgPath = "./dist/logo.svg";
    const finalLogo = generateShape(data);

    
    fs.writeFile(svgPath, generateSVG(finalLogo), (err) =>
      err ? console.error(err) : console.log("Generated logo.svg")
    );
  })
  .catch((err) => console.error(err));

