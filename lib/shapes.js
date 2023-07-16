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




// class shape{
//     constructor(){
//         this.color=''
//     }
//     setColor(color){
//         this.color=(color);
//     }
// }

// class Circle extends Shape{
//     render(){
//         return `<circle cx="50%" cy="50%" r="100%" height="100%" width="100%" fill="${this.color}"/>   ` 
//     }
// }

// class Triangle extends Shape{
//     render(){
//         return `<polygon points="0,200 300, 200 150, 0" height="100%" width="100%" fill="${this.color}"/>` 
//     }
// }

// class Square extends Shape{
//     render(){
//         return `<rect x="50" height="200" width="200" fill="${this.color}"/>` 
//     }
// }

// module.exports = {Circle, Triangle, Square}
