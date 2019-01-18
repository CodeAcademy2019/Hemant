
let all = (prom1,prom2) => {
    let counter = 0;
    let promise = new Promise((resolve, reject) => {
        let arg1, arg2;

        prom1.then((fulfill_arg) => {
            counter++;
            arg1 = fulfill_arg;
            if(counter > 1) {
                resolve([arg1]);
            }
        });
        prom2.then((fulfill_arg) => {
            counter++;
            arg2 = fulfill_arg;
            if(counter > 1) {
                resolve([arg1, arg2]);
            }
        });
    });
    return promise;
}

let getPromise1 = Promise.resolve('we');
let getPromise2 = Promise.resolve('we we');

let promise = all(getPromise1, getPromise2);

module.exports = promise;