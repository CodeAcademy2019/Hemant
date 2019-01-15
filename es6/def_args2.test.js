const ts = require('./def_args2');

test('test with string hello and freq=2', () => {
    expect(ts('hello',2)).toEqual(`hello!!`);
});

test('test with string hello and freq=def arg', () => {
    expect(ts('hello')).toEqual(`hello!!!!!`);
});

test('test with string hello! and freq=def arg', () => {
    expect(ts('hello!')).not.toEqual(`hello!!!!!`);
});