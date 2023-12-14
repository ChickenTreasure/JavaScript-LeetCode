let arr = [1, 2, 3, 1, 1, 3, 2];

function first(arr) {
    return Array.from(new Set(arr));
}

function second(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i])
        }
    }
    return result;
}

function third(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(first(arr));
second(arr);
third(arr);


// 2.两大数之和，例如 9999129998+9999129998

function BigSum(num1, num2) {
    if (typeof num1 == 'number' && typeof num2 == 'number') {
        let a = BigInt(num1);
        let b = BigInt(num2);
        return a + b;
    } else {
        let number1 = Number(num1);
        let number2 = Number(num2);
        return BigInt(number1) + BigInt(number2);
    }
}

console.log(BigSum(9999129998, 9999129998))





// flat实现
let arr1 = [2, [3, 4, [5, 6]], 7];

const flat1 = function(arr, depth = 0) {
    let results = [];
    (function Flat(arr, depth) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && depth > 0) {
                Flat(arr[i], depth - 1);
            } else {
                results.push(arr[i]);
            }
        }
    })(arr, depth)
    return results;
}

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
console.log(flat1(arr1, 2))