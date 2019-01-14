const ts = require('./rest');

test('avg of 3 numbers 2,3,8', () => {
    expect(ts(2,3,8)).toBe(4.333333333333333);
});

test('avg of 4 numbers 2,3,8,3', () => {
    expect(ts(2,3,8,3)).toBe(4);
});