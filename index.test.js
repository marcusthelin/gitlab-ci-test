const add = require('./index')

test('Should add numbers correctly', () => {
    expect(add(2, 3)).toBe(7)
})
