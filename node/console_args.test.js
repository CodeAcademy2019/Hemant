const test_func = require('./console_args');

test('check with array [0,0,0]', () => {
    expect(test_func([0,0,0])).toEqual(0);
});

test('check with array [5]', () => {
    expect(test_func([5])).toEqual(5);
});

test('check with array [-1,-4]', () => {
    expect(test_func([-1,-4])).toEqual(-5);
});
