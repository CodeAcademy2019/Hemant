module.exports = function average(...arr) {
    var result = 0;
    var count = 0;
    arr.forEach(function (value) {
        result += value;
        count++;
    });

    return result/count;
};