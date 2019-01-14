let arr = process.argv.splice(2);
let res = Math.min(...arr);
console.log(`The minimum of [${arr}] is ${res}`);

module.exports = function check(...arr) {
    let res = Math.min(...arr);
    return (`The minimum of [${arr}] is ${res}`);
}