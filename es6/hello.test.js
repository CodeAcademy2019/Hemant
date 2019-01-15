const ts = require('./hello');

test('test with name nodejs', () => {
    expect(ts('nodejs')).toBe(`Hello nodejs`);
});

test('test with empty string', () => {
    expect(ts('')).not.toBe(`Hello`);
});
