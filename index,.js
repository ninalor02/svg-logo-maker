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
        return `<svg version"1.1" xmins="https://www.w3.org/2000/svg" width="300" height="200">${this.shapeEl}${this.textEl}</svg>`
    }
    setText(text,color) {
        if(text.length > 3 && text.length < 1) {
            throw new Error('please enter in a character between 1-3!')
        }
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }

}
