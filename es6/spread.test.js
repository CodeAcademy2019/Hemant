const ts = require('./spread');

test('test with all 0 array', () => {
    expect(ts(0,0,0)).toEqual(`The minimum of [0,0,0] is 0`);
});

test('test with sorted array', () => {
    expect(ts(1,7,12,101)).toEqual(`The minimum of [1,7,12,101] is 1`);
});

test('test with negative elements array', () => {
    expect(ts(-1,-7,-12,-101)).not.toEqual(`The minimum of [1,7,12,101] is 1`);
});