const ts = require('./def_arg1');

test('test with lower_bound=0 and upper_bound=2', () => {
    expect(ts(0,2)).toBe(1);
});

test('test with lower_bound=3 and upper_bound=5', () => {
    expect(ts(3,4)).toBe(3.5);
});