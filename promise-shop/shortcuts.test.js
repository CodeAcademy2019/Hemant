const st = require('./shortcuts');

test('test if fulfill of promise1 is called', () => {
    return expect(st.promise1()).resolves.toBe('SECRET VALUE');
});

test('test if reject of promise1 is called', () => {
    return expect(st.promise1()).rejects.toThrow('FAIL');
});

test('test if reject of promise2 is called', () => {
    return expect(st.promise2()).rejects.toThrow('FAIL');
});

test('test if reject of promise3 is called', () => {
    return expect(st.promise3()).rejects.toThrow('THERE IS AN ERROR!!!');
});