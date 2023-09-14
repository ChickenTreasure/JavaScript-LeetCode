/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];
    let arr1 = nums.slice(1);
    let arr2 = nums.slice();
    arr2.pop();
    return Math.max(oneRob(arr1), oneRob(arr2))
}
var oneRob = function(nums) {
    let n = nums.length;
    if (n == 1) return nums[0];
    if (n == 2) return Math.max(nums[0], nums[1]);
    let dp = new Array(n);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[n - 1];
}