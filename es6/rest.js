module.exports = function average(...arr) {
    var result = 0;
    var count = 0;

    result = reduce((acc,curr)=>acc+=curr,0);

    return result/arr.length;
};