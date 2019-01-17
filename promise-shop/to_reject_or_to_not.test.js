const st = require('./to_reject_or_to_not');

test('test if fulfill is called', () => {
    return expect(st()).resolves.toBe('I FIRED');
});


test('test if reject is called', () => {
    return expect(st()).rejects.toThrow('I DID NOT FIRE');
});