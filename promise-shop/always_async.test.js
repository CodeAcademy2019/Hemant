const st = require('./always_async');

test('test if fulfill is called', () => {
    expect.assertions(1);
    return expect(st()).resolves.toBe('PROMISE VALUE');
});


test('test if reject is called', () => {
    //expect.assertions(1);
    return expect(st()).rejects.toThrow('REJECTED!');
});