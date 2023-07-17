const inquirer = require("inquirer");
const fs = require("fs");
const { generateSVG } = require("./lib/generateSVG");
const { generateShape } = require("./lib/generateShape");

inquirer
  .prompt([
    {
      type: "input",
      name: "logoName",
      message: "Please enter 1-3 letters all in Caps!",
    },
    {
      type: "input",
      name: "textColor",
      message: `Please enter text color keyword?`,
    },
    {
      type: "input",
      name: "logoColor",
      message: `Please enter in a color for your logo color?`,
    },
    {
      type: "list",
      name: "logoShape",
      message: `Please choose logo shape`,
      choices: ["triangle", "circle", "square"],
    },
  ])
  .then((data) => {
    const svgPath = "./dist/logo.svg";
    const finalLogo = generateShape(data);

    //Generate the svg logo here.
    fs.writeFile(svgPath, generateSVG(finalLogo), (err) =>
      err ? console.error(err) : console.log("Generated logo.svg")
    );
  })
  .catch((err) => console.error(err));



// const inquirer = require("inquirer");
// const fs = require('fs');
// const {generateSVG} = require("./lib/generateSVG");
// const {generateShape} = require("./lib/generateShape");

// inquirer
// .prompt = [
//     { 
//     type: 'list',
//     name: 'shape',
//     message: 'Please choose which shape?',
//     choices: ['circle', 'triangle', 'square'],
// },
// {   
//     type: 'input',
//     name: 'shape-color',
//     message: 'Please enter in a desire color?',
// },
// {   
//     type: 'list',
//     name: 'text',
//     message: 'Please enter in 3(Three) letters in CAPS?',
// },
// {
//     type: 'list',
//     name: 'text-color',
//     message: 'Please enter a color that you would like the text to be?',
//     choices: ['circle', 'triangle', 'square'],
// },
// ]
// .then((data) => {
//     const svgPath = "./dist/logo.svg";
//     const finalLogo = generateShape(data);

    
//     fs.writeFile(svgPath, generateSVG(finalLogo), (err) =>
//       err ? console.error(err) : console.log("Generated logo.svg")
//     );
//   })
//   .catch((err) => console.error(err));

