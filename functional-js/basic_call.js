function duckCount(...args) {
    return args.filter((obj) => Object.prototype.hasOwnProperty.call(obj, 'quack')).length;
}

// function duckCount(...args) {
//     return args.reduce((acc,curr)=> {
//         Object.prototype.hasOwnProperty.call(curr, 'quack') ? acc++ : acc ;
//         return acc;
//     }, 0);
// }

module.exports = duckCount