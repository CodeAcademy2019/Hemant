const ts = require('./def_arg1');

test('test with lower_bound=0 and upper_bound=2', () => {
    expect(ts(0,2)).toEqual(1);
});

test('test with lower_bound=3 and upper_bound=4', () => {
    expect(ts(3,4)).not.toEqual(3.55);
});