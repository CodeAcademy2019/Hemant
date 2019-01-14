const ts = require('./hello');

test('test with name nodejs', () => {
    expect(ts('nodejs')).toBe(`Hello nodejs`);
});
