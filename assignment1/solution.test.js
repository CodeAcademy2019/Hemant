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

test('check if "isSpare" returns true if sum = 10', () => {
    expect(test_obj.isSpare(10,2)).toEqual(true);
});

test('check if "isSpare" returns true if sum = 10 but throw =1', () => {
    expect(test_obj.isSpare(10,1)).not.toEqual(true);
});

test('check if "isSpare" returns true if sum = 0 but throw =2', () => {
    expect(test_obj.isSpare(0,2)).not.toEqual(true);
});

test('check if "isStrike" returns true if pins = 10', () => {
    expect(test_obj.isStrike(10,1)).toEqual(true);
});

test('check if "isStrike" returns true if pins = 10 but throw =2', () => {
    expect(test_obj.isStrike(10,2)).not.toEqual(true);
});

test('check if "isStrike" returns true if sum = 0 but throw =1', () => {
    expect(test_obj.isStrike(0,1)).not.toEqual(true);
});

test('check if "isStrike" returns true if sum = 5 but throw =2', () => {
    expect(test_obj.isStrike(5,2)).not.toEqual(true);
});
