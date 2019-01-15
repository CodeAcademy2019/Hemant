const ts = require('./arrow');

test('test with all caps', () => {
    expect(ts(["HELLO","WORLD"])).toEqual("[HELLO,WORLD] becomes \"HW\"");
});

test('test with all small', () => {
    expect(ts(["hello","world"])).toEqual("[hello,world] becomes \"hw\"");
});

test('test with one small', () => {
    expect(ts(["hello","World"])).not.toEqual("[hello,World] becomes \"Hw\"");
});