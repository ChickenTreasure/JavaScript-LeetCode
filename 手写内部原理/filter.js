Array.prototype._filter = function(fn) {
    let arr = this || [];
    let newArr = [];
    for (let i in arr) {
        if (fn(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

let arr1 = [1, 2, 3]
console.log(arr1._filter(item => item > 1))