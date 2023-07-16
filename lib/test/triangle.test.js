const Triangle = require("../triangle")
describe('Triangle', () => {
    test('render correctly', () => {
        const shape = new Triangle();
        var color=('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="0,200 300, 200 150, 0" height="100%" width="100%" fill="${this.color}"/>`);
    });
});