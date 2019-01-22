
const alwaysThrows = () => {
    throw new Error(`OH NOES`);
};
var resultArray = [];
const iterate = (arg) => {
    resultArray.push(arg);
    console.log(arg);
    return arg + 1;
};
const promise = Promise.resolve(iterate(1)).then(iterate).then(iterate).then(iterate).then(alwaysThrows)
    .then(iterate).then(iterate).then(iterate).then(iterate).then(iterate)
    .catch((error) => console.log(error.message));


//let x = wrapper();
setImmediate(() => console.log(resultArray));


//wrapper();
module.exports = { promise, iterate, alwaysThrows, resultArray };
