const st = require('./error');

test('test if fulfill is called', () => {
    return expect(st()).resolves.toBe('PROMISE VALUE');
});

test('test if reject is called', () => {
    return expect(st()).rejects.toThrow('REJECTED!');
});