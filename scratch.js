'use strict;';

function Spy(target, method) {
  const spy = { count: 0 };

  const oldFunction = target[method];

  target[method] = function () {
    spy.count++;
    return oldFunction.apply(target, arguments);
  };
  return spy;
}

const sp = Spy(console, 'log');

console.log('hello');

console.log(sp.count);
console.log(sp.count);
