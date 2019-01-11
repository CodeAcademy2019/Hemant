
const sq = require('./stringop');

test('finds sqrt of 4', () => {
    expect(sq(4)).toBe(2);
});

test('finds sqrt of 16', () => {
    expect(sq(16)).toBe(4);
});

test('finds sqrt of -16', () => {
    expect(sq(-16)).toBe(':(');
});