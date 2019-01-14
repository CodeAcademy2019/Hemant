module.exports = function arrayMap(arr, fn) {
    return arr.reduce((acc, current) => acc.concat([fn(current)]), []);
}
