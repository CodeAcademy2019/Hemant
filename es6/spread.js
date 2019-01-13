let arr = process.argv.splice(2);
let res = Math.min(...arr);
console.log(`The minimum of [${arr}] is ${res}`);