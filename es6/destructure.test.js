const ts = require('./destructure');

test('test with 3 args', () => {
    expect(ts(['a','hemant','myemail@gmail.com'])).toEqual(`{ username: 'hemant', email: 'myemail@gmail.com' }`);
});

test('test with 6 args', () => {
    expect(ts(['a','hemant','myemail@gmail.com','ty','as','qw'])).toEqual(`{ username: 'hemant', email: 'myemail@gmail.com' }`);
});

test('test with 6 args and empty string', () => {
    expect(ts(['a','hemant','','ty','as','qw'])).not.toEqual(`{ username: 'hemant', email: ' ' }`);
});