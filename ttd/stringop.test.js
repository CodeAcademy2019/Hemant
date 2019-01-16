
const sq = require('./stringop');

test('finds sqrt of 4', () => {
    expect(sq(4)).toEqual(2);
});

test('finds sqrt of 16', () => {
    expect(sq(16)).toEqual(4);
});

test('finds sqrt of -16', () => {
    expect(sq(-16)).toEqual(':(');
});