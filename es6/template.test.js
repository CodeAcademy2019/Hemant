const ts = require('./template');

test('test with name Hemant', () => {
    expect(ts("Hemant")).toBe(`Hello, Hemant!\nYour name lowercased is "hemant".`);
});

test('test with name HeMant', () => {
    expect(ts("HeMant")).toBe(`Hello, HeMant!\nYour name lowercased is "hemant".`);
});