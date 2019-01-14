// console.log(`Hello, ${process.argv[2]}!\nYour name lowercased is "${process.argv[2].toLowerCase()}".`);

module.exports = function print(arg) {
    return (`Hello, ${arg}!\nYour name lowercased is "${arg.toLowerCase()}".`);
}

