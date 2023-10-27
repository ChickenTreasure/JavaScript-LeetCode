function countNestedArrays(arr) {
    let depth = 0;

    function calculateDepth(array, currentDepth) {
        if (!Array.isArray(array)) {
            return;
        }

        depth = Math.max(depth, currentDepth);

        for (let i = 0; i < array.length; i++) {
            calculateDepth(array[i], currentDepth + 1);
        }
    }
    calculateDepth(arr, 1);
    return depth;
}

function a(arr) {
    let depth = 0;

    function depthCalculate(arr, currentDepth) {
        if (!Array.isArray(arr)) {
            return;
        }
        depth = Math.max(depth, currentDepth);
        for (let i in arr) {
            depthCalculate(arr[i], currentDepth + 1);
        }
    }
    depthCalculate(arr, 1);
    return depth;
}

// 示例用法
const array1 = [1, 2, 3];
const array2 = [4, [5, 6]];
const array3 = [7, [8, [9, 10]]];
const array4 = [
    [
        [11]
    ]
];

console.log(countNestedArrays(array1)); // 输出 1
console.log(countNestedArrays(array2)); // 输出 2
console.log(countNestedArrays(array3)); // 输出 3
console.log(countNestedArrays(array4)); // 输出 3，即使嵌套更多层也只会返回最深层的层数