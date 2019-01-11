function red(arr, i, fn, acc) {
    if(i > arr.length - 1) {
        return acc;
    }
    return red(arr, i + 1, fn, fn(acc, arr[i], i, arr));
};

function reduce(arr, fn, initial) {    
	return red(arr, 0, fn, initial);
};


module.exports = reduce