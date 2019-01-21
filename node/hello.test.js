const test_func = require('./hello');

test('test with string HELLO WORLD', () => {
    expect(test_func('HELLO WORLD')).toEqual(`HELLO WORLD`);
});

test('test with empty string', () => {
    expect(test_func('')).not.toEqual(`Hello`);
});
