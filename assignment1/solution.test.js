const test_obj = require('./solution');

test('test with input which checks all open frames', () => {
    expect(test_obj.roll_test([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toEqual(90);
});

test('test with input which checks if spare is handled', () => {
    expect(test_obj.roll_test([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual(16);
});

test('test with input which checks if strike is handled', () => {
    expect(test_obj.roll_test([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toEqual(30);
});

test('test with input which checks if strike is handled', () => {
    expect(test_obj.roll_test([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10])).toEqual(30);
});
