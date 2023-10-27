/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0,
        right = nums.length - 1;
    for (let i = 0; i <= right; i++) {
        if (nums[i] == 0) {
            swap(nums, i, left);
            left++;
        } else if (nums[i] == 2) {
            swap(nums, i, right);
            right--;
            i--;
        }
    }

    function swap(arr, left, right) {
        let tmp = arr[left];
        arr[left] = arr[right];
        arr[right] = tmp;
    }
};