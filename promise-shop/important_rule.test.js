const test_object = require('./important_rule');

test('check iterate function with input 5', () => {
    expect(test_object.iterate(5)).toEqual(6);
});

test('check alwaysThrows function with no input', () => {
    expect(test_object.alwaysThrows).toThrow(`OH NOES`);
});

test('check alwaysThrows function with no input', () => {
    return expect(test_object.resultArray).toEqual([1,2,3,4,5]);
});