const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");

const generateShape = (data) => {
  const { logoShape } = data;
  switch (logoShape) {
    case "circle":
      const generateCircle = new Circle(data);
      return generateCircle;
      break;

    case "triangle":
      const generateTriangle = new Triangle(data);
      return generateTriangle;
      break;

    case "square":
      console.log(data);
      const generateSquare = new Square(data);
      return generateSquare;
      break;

    default:
      return `Oops, something went wrong`;
      break;
  }
};

module.exports = { generateShape };




//npm package to vaild for CSS3 compatible color value.
const isCss3Color = require("is-css3-color");

class Shape {
  constructor({ logoName, textColor, logoColor, logoShape }) {
    this.logoShape = logoShape;
    this.textColor = textColor;
    this.logoColor = logoColor;
    this.logoName.textColor.logoColor = logoName;
  }

    // this.validateTextResponse(logoName);
    // this.logoName = logoName;

    // this.validateColorResponse(textColor);
    // this.textColor = textColor;

    // this.validateColorResponse(logoColor);
    // this.logoColor = logoColor;
 

  // ifResponseEmpty(input) {
  //   if (!input) throw new Error("Input cannot be empty");
  // }

  // validateTextResponse(input) {
  //   this.ifResponseEmpty(input);

  //   if (input.length > 3) {
  //     throw new Error("Logo text cannot be more than 3 characters");
  //   }
  // }

  // validateColorResponse(input) {
  //   this.ifResponseEmpty(input);

  //   //Change all css named color to lowercase
  //   input = input.toLowerCase();

  //   if (!isCss3Color(input)) {
  //     throw new Error("Please enter a vaild css color keyword or hex code");
  //   }
  // }

  // render() {
  //   throw new Error("Need to be implemented in the child functions");
  // }
}
module.exports = {Shape};