var inputs = process.argv.slice(2);
var result = inputs.map(str => str[0]).reduce((acc, curr) => acc + curr);
console.log(`[${inputs}] becomes "${result}"`);

function arrow(inputs) {
    var result = inputs.map(str => str[0]).reduce((acc, curr) => acc + curr);
    return `[${inputs}] becomes "${result}"`;
}

module.exports = arrow