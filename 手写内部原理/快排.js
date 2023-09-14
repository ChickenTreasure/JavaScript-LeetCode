let quickSort = function(arr) {
    if (arr.length < 2) return arr;
    let leader = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > leader) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    left = quickSort(left);
    right = quickSort(right);
    left.push(leader);
    return left.concat(right);
}
let arr1 = [2, 432, 222, 42, 32, 14];
console.log(quickSort(arr1));