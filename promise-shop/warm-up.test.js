'use strict';
const stm = require('./warm-up');

jest.useFakeTimers();

test('count number of times setTimeout is called', () => {
  stm();
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
});