const test_func = require('./async_fileio');

// test('check with file file_test.txt with 2 newline characters', () => {
//     expect(test_func('./file_test.txt')).toEqual(2);
// });

test(`check with file file_test.txt with 2 newline characters`, () => {
    return expect(test_func('./file_test.txt')).resolves.toEqual(2);
});

test('check with empty file file_test2.txt', () => {
    return expect(test_func('./file_test2.txt')).resolves.toEqual(0);
});

test('check with file file_test3.txt with whitespaces', () => {
    return expect(test_func('./file_test3.txt')).resolves.toEqual(0);
});

