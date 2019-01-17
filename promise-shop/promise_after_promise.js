var promise1 = first();

var promise2 = promise1.then(second); 

promise2.then(console.log);

module.exports = {promise1: ()=>promise1, promise2: ()=>promise2};
