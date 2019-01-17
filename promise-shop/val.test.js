const promise = require('./val');

test('test if fulfill is called', () => {
    return expect(promise[0]()).resolves.toBe('MANHATTAN');
});

test('test if reject is called', () => {
    return expect(promise[0]()).rejects.toThrow('I DID NOT FIRE');
});

test('check if attachTitle returns "DR. MANHATTAN"', () => {
    expect(promise[1]('MANHATTAN')).toEqual('DR. MANHATTAN');
});