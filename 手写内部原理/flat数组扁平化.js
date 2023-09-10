const _flat = function(arr, depth = 0) {
    let results = [];
    (function __flat(arr, depth) {
        for (let i in arr) {
            if (Array.isArray(arr[i]) && depth > 0) {
                __flat(arr[i], depth - 1);
            } else {
                arr[i] !== void 0 && results.push(arr[i])
            }
        }
    })(arr, depth)
    return results;
}

let arr1 = [1, 2, [3, 4, [5]], 6, 7]
console.log(_flat(arr1, 2));