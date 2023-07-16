describe('Square', () => {
    test('render correctly', () => {
        const shape = new Square();
        var color=('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.color}"/>`);
    });
});