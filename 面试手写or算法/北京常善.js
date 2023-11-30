// 1. 两数之和（ Two Sum）
// 给定一个整数数组 nums 和一个整数目标值 target， 请你在该数组中找出和为目标值的那两个整数， 并返回它们的数组下标。 可以假设每种输入只会对应一个答案。

// 2. 移除元素（ Remove Element）
// 给你一个数组 nums 和一个值 val， 你需要原地移除所有数值等于 val 的元素， 并返回移除后的数组。 不要使用额外的数组空间， 并且【 不能使用现成的API函数】， 你必须仅使用 O(1) 额外空间并原地修改输入数组。

// 3. 合并两个有序数组（ Merge Sorted Array）
// 给你两个有序整数数组 nums1 和 nums2， 请将 nums1， nums2 合并， 返回一个有序数组。【 不可以使用现成的API函数】

// 4. 跳跃游戏（ Jump Game）
// 给定一个非负整数数组 nums， 你最初位于数组的第一个位置。 数组中的每个元素代表你在该位置可以跳跃的最大长度。 判断是否能恰好达到最后一个位置。

// 5. 最大子数组和（ Maximum Subarray）
// 给定一个整数数组 nums， 找到一个具有最大和的连续子数组（ 子数组最少包含一个元素）， 返回其最大和。

// 1.两数之和

function TowSum(nums, target) {
    let map = new Map();
    let newArr = [];

    for (let i in nums) {
        if (map.has(target - nums[i])) {
            newArr[0] = i;
            newArr[1] = map.get(target - nums[i]);
        } else {
            map.set(nums[i], i);
        }
    }
    return newArr;
}
// 2.移除元素
function RemoveElement(nums, val) {
    // (1) for循环遍历
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            continue;
        } else {
            newArr.push(nums[i]);
        }
    }
    // (2) includes方法
    let newArr2 = nums.includes(val) ? nums.pop(val) : nums;
    return newArr;
}

function removeElement(nums, val) {
    let newIndex = 0; // 新指针的初始位置

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[newIndex] = nums[i]; // 将非目标值复制到新指针位置
            newIndex++; // 新指针向后移动一位
        }
    }

    return newIndex; // 返回移除目标值后的数组长度
}



// 3.合并两个有序数组
// 指针方式
function SortArray(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let p1 = m - 1,
        p2 = n - 1,
        p = m + n - 1;
    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p--] = nums1[p1--]
        } else {
            nums1[p--] = nums2[p2--];
        }
    }

    return nums1;
};


let arr1 = [3, 4, 6, 7, 9];
let arr2 = [5, 6, 8, 10];
SortArray(arr1, arr2);

// 4.跳跃游戏
function JumpGame(nums) {
    // 贪心算法
    let last = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= last) {
            last = i;
        }
    }
    return last === 0;
}


//5.最大子数组之和
function MaxSub(nums) {
    // dp 动态规划实现
    let n = nums.length;
    if (n == 0) return 0;
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}