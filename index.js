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
    const resultLogo = generateShape(data);

    //Generate the svg logo here.
    fs.writeFile(svgPath, generateSVG(resultLogo), (err) =>
      err ? console.error(err) : console.log("Generated logo.svg")
    );
  })
  .catch((err) => console.error(err));
