const inquirer = require("inquirer");
const fileSystem = require('./node_modules/graceful-fs/graceful-fs');
const {Triangle,Square, Circle} = require("./lib/shapes");

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

class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement =''
    }
    render(){
        return ``
    }
}
