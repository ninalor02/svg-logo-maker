const inquirer = require("inquirer");
const fs = require('fs');
const {generateSVG} = require("./lib/svg");
const {generateShape} = require("./lib/shapes")

const questions = [
    { // choose a shape
    type: 'list',
    name: 'shape',
    message: 'Please choose which shape?',
    choices: ['circle', 'triangle', 'square'],
},
{   // color
    type: 'input',
    name: 'shape-color',
    message: 'Please enter in a desire color?',
},
{   //text input for what the logo will be
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

    //Generate the svg logo here.
    fs.writeFile(svgPath, generateSVG(finalLogo), (err) =>
      err ? console.error(err) : console.log("Generated logo.svg")
    );
  })
  .catch((err) => console.error(err));


//   class Svg{
//     constructor(){
//         this.textElement = ''
//         this.shapeElement =''
//     }
//     render(){
//         return `<svg version"1.1" xmins="https://www.w3.org/2000/svg" width="300" height="200">${this.shapeEl}${this.textEl}</svg>`
//     }
//     setText(text,color) {
//         if(text.length > 3 && text.length < 1) {
//             throw new Error('please enter in a character between 1-3!')
//         }
//         this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
//     }
//     setShape(shape) {
//         this,shapeEl = shape.render();
//     }
// }

// // functions to init app

// function init() {
//     inquirer.prompt(questions)
//     .then((data) => {
//         const logoText = data.text;
//         const svg = new SVG();
//         let userShape = '';
//         if(data.shape == 'Circle') {
//             userShape = new Circle();
//         } else if(data.shape == 'Square') {
//             serShape = new Square();
//         }else if(data.shape == 'Triangle') {
//             serShape = new Triangle();
//         }else {
//             console.timeLog("Please go back and pick a shape!")
//         }

//         userShape,setColor(data['shape-color']);
//         svg.setText(logoText, data['text-color']);
//         svg.setShape(userShape);
//         fs.writeFileSync(`${data.shape}.svg`, svg.render());

//         })
// }
// init();