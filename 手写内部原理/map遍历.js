// map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

Array.prototype._map = function(fn) {
    let arr = this || [];
    let newArr = [];
    for (let i in arr) {
        newArr[i] = fn(arr[i])
            // newArr.push(fn(i))
    }
    return newArr;
}

let arr1 = [1, 2, 3]
console.log(arr1._map(item => item * 2))