const {Circle, Square, Triangle} = require('./shape-test')

//circle
describe('Circle', () => {
    test('render correctly', () => {
        const shape = new Circle();
        var color=('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100%" height="100%" width="100%" fill="${this.color}"/>`);
    });
});

describe('Triangle', () => {
    test('render correctly', () => {
        const shape = new Triangle();
        var color=('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="0,200 300, 200 150, 0" height="100%" width="100%" fill="${this.color}"/>`);
    });
});

describe('Square', () => {
    test('render correctly', () => {
        const shape = new Square();
        var color=('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.color}"/>`);
    });
});