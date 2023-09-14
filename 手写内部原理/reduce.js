Array.prototype._reduce = function(fn, start) {
    let arr = this || [];
    let sum = 0;
    let index = 0;
    if (start) {
        sum = start;
    } else {
        sum = arr[0];
        index = 1;
    }
    for (let i = index; i < arr.length; i++) {
        sum = fn(sum, arr[i]);
    }
    return sum;
}
console.log([1, 2, 3]._reduce((left, right) => left + right));