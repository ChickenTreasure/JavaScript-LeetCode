/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0,
        right = height.length - 1;
    let res = 0;
    let rmax = 0,
        lmax = 0;
    while (left < right) {
        lmax = Math.max(lmax, height[left]);
        rmax = Math.max(rmax, height[right]);
        if (height[left] < height[right]) {
            res += lmax - height[left];
            left++;
        } else {
            res += rmax - height[right];
            right--;
        }
    }
    return res;
};