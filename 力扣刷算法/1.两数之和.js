/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    let n = nums.length;
    let ans = new Array(2);
    for (let i = 0; i < n; i++) {
        if (map.has(target - nums[i])) {
            ans[0] = map.get(target - nums[i]);
            ans[1] = i;
        } else {
            map.set(nums[i], i);
        }
    }
    return ans;
};