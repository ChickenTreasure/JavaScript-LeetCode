/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length <= 1) return [nums]; // 数组只有一个元素时直接返回
    let results = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let otherNums = nums.slice(0, i).concat(nums.slice(i + 1)); // 取出当前元素以外的其他元素
        permute(otherNums).forEach(arr => {
            results.push([num].concat(arr)); // 将当前元素加入到其他元素的全排列中
        })
    }
    return results;
};

let arr1 = [1, 2, 3]
console.log(permute(arr1));


const _permute = string => {
    if (string.length <= 1) return [string];
    let results = [];
    for (let i = 0; i < string.length; i++) {
        let nums = string.split('').filter(item => item !== string[i]);
        _permute(nums.join('')).forEach(item1 => {
            results.push(string[i] + item1);
        })
    }
    return results;
}