const ts = require('./rest');

test('avg of 3 numbers 2,3,8', () => {
    expect(ts(2,3,8)).toEqual(4.333333333333333);
});

test('avg of 4 numbers 2,3,8,3', () => {
    expect(ts(2,3,8,3)).toEqual(4);
});

test('avg of 2 numbers 2,3', () => {
    expect(ts(2,3)).not.toEqual(2);
});