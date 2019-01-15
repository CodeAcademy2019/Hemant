const ts = require('./template');

test('test with capitalized word Hemant', () => {
    expect(ts("Hemant")).toBe(`Hello, Hemant!\nYour name lowercased is "hemant".`);
});

test('test with 2 caps in name HeMant', () => {
    expect(ts("HeMant")).toBe(`Hello, HeMant!\nYour name lowercased is "hemant".`);
});

test('test with numbers ApPlE1', () => {
    expect(ts("ApPlE1")).not.toBe(`Hello, ApPlE1!\nYour name lowercased is "apple".`);
});