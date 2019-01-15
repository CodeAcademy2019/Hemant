const ts = require('./hello');

test('test with name nodejs', () => {
    expect(ts('nodejs')).toEqual(`Hello nodejs`);
});

test('test with empty string', () => {
    expect(ts('')).not.toEqual(`Hello`);
});
