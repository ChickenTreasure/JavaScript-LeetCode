const _flat = function(arr, depth = 0) {
    let results = [];
    (function Flat(arr, depth) {
        for (let i in arr) {
            if (Array.isArray(arr[i]) && depth > 0) {
                Flat(arr[i], depth - 1);
            } else {
                results.push(arr[i])
            }
        }
    })(arr, depth);
    return results;
}

const _flat1 = function(arr, depth = 0) {
    let results = [];
    (function Flat(arr, depth) {
        for (let i in arr) {
            if (Array.isArray(arr[i]) && depth > 0) {
                Flat(arr[i], depth - 1);
            } else {
                results.push(arr[i]);
            }
        }
    })(arr, depth)
    return results;
}

let arr1 = [1, [2, 3, [4]], 5];
console.log(_flat(arr1, 2));



const flat3 = function(arr, depth = 0) {
    let results = [];
    (function Flat(arr, depth) {
        for (let i in arr) {
            if (Array.isArray(arr[i]) && depth > 0) {
                Flat(arr[i], depth - 1);
            } else {
                results.push(arr[i]);
            }
        }
    })(arr, depth)
    return results;
}

const depthSearch = function(arr) {
    let depth = 0;

    function depthTo(arr, currentDepth) {
        if (!Array.isArray(arr)) return;
        depth = Math.max(depth, currentDepth);
        for (let i in arr) {
            depthTo(arr[i], currentDepth + 1);
        }
    }
    depthTo(arr, 1);
    return depth;
}