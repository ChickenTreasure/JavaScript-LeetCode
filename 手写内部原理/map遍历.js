Array.prototype._map = function(fn) {
    let arr = this || [];
    let newArr = [];
    for (let i of arr) {
        newArr.push(fn(i))
    }
    return newArr;
}

let arr1 = [1, 2, 3];
console.log(arr1._map(i => i + 3));