const generateSVG = (shape) => {
  return `
  <svg viewBox="0 0 100 100" xmlns="https://www.w3.org/TR/SVG2/" width="300" height="200">
    ${shape.render()}
    <text
      x="50%"
      y="${shape.logoShape != "triangle" ? "50%" : "40%"}"
      text-anchor="middle"
      fill="${shape.textColor}"
      font-size="2.3rem" letter-spacing="2" dy=".3em"
      font-family="monospace">${shape.logoName}
    </text>
  </svg>
  `;
};

module.exports = { generateSVG };



// const Triangle = require("./triangle");
// const Circle = require("./circle");
// const Square = require("./square");

// const generateShape = (data) => {
//   const { logoShape } = data;
//   switch (logoShape) {
//     case "circle":
//       const generateCircle = new Circle(data);
//       return generateCircle;
//       break;

//     case "triangle":
//       const generateTriangle = new Triangle(data);
//       return generateTriangle;
//       break;

//     case "square":
//       console.log(data);
//       const generateSquare = new Square(data);
//       return generateSquare;
//       break;

//     default:
//       return `Please check it again,something went wrong!`;
//       break;
//   }
// };

// module.exports = { generateShape };