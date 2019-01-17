const Async = require('./hello');


test('Test to check if MAIN PROGRAM is printed before PROMISE VALUE',() => {
    let temp = Async();
    expect(temp[0]+temp[1]).toEqual('MAIN PROGRAM PROMISE VALUE');
});

//const Async = require('./alwaysAsync');


// test('Test to check if MAIN PROGRAM is printed before PROMISE VALUE',() => {
//     //let temp = Async();
//     return expect(Async()).toEqual('MAIN PROGRAM PROMISE VALUE');
// });