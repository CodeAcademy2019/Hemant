let arr = process.argv.splice(2).map((x) => Number(x));
console.log(arr.reduce((acc, curr) => acc += curr,0));

module.exports = (arr) => arr.reduce((acc, curr) => acc += curr,0);