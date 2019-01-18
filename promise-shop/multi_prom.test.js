let promise_test = require('./multi_prom');

test('check if promise returns "[we, we we]"', () => {
    return expect(promise_test).resolves.toEqual(['we','we we']);
});

test('check if promise rejects', () => {
    return expect(promise_test).rejects.toThrow();
});