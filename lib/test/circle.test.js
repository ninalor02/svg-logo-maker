const Circle = require("../circle")
describe('Circle', () => {
    test('render correctly', () => {
        const shape = new Circle();
        var color=('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100%" height="100%" width="100%" fill="${this.color}"/>`);
    });
});
