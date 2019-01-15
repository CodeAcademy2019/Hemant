const ts = require('./destructure');

test('test with 3 args', () => {
    expect(ts(['a','hemant','myemail@gmail.com'])).toBe(`{ username: 'hemant', email: 'myemail@gmail.com' }`);
});

test('test with 6 args', () => {
    expect(ts(['a','hemant','myemail@gmail.com','ty','as','qw'])).toBe(`{ username: 'hemant', email: 'myemail@gmail.com' }`);
});

test('test with 6 args and empty string', () => {
    expect(ts(['a','hemant','','ty','as','qw'])).not.toBe(`{ username: 'hemant', email: ' ' }`);
});