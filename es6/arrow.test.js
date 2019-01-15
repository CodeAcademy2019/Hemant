const ts = require('./arrow');

test('test with all caps', () => {
    expect(ts(["HELLO","WORLD"])).toBe("[HELLO,WORLD] becomes \"HW\"");
});

test('test with all small', () => {
    expect(ts(["hello","world"])).toBe("[hello,world] becomes \"hw\"");
});

test('test with one small', () => {
    expect(ts(["hello","World"])).not.toBe("[hello,World] becomes \"Hw\"");
});