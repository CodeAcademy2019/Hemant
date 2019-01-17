let promise1 = Promise.resolve('SECRET VALUE');
let promise2 = Promise.reject(new Error('FAIL'));
let promise3 = Promise.reject(new Error('THERE IS AN ERROR!!!'));

promise1.then(console.log);

promise3.catch(function (err) {
    console.error(err.message);
});

module.exports = {promise1:()=>promise1, promise2: ()=>promise2, promise3: ()=>promise3};