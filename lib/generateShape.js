const Triangle = require("./triangle");
const Circle = require("./circle");
const Square = require("./square");

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
      return `Please check it again,something went wrong!`;
      break;
  }
};

module.exports = { generateShape };