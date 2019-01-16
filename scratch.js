'use strict;'

function Spy(target, method) {
    var spy = {count: 0};

    var oldFunction = target[method];

    target[method] = function() {
        spy.count++;
        return oldFunction.apply(target, arguments);
    }
    return spy;
}

let sp = Spy(console, 'log');

console.log('hello');

console.log(sp.count);
console.log(sp.count);