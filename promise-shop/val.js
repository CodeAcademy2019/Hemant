// let attachTitle = (name) => 'DR. ' + name;
    
// let prom = Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);

let attachTitle = (name) => 'DR. ' + name;

let promise = new Promise((resolve, reject) => {
    resolve('MANHATTAN');
});

promise.then(attachTitle, null);

module.exports = [ () => promise, attachTitle];