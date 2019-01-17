const st = require('./reject_a_promise');

test('test if fulfill is called', () => {
    expect.assertions(1);
    return expect(st()).resolves.toBe('FULFILLED!');
});


test('test if reject is called', () => {
    expect.assertions(1);
    return expect(st()).rejects.toThrow('REJECTED!');
});