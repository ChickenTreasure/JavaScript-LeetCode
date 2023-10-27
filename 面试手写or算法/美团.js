// 描述
// 给出一组数字，返回该组数字的所有排列
// 例如：
// [1,2,3]的所有排列如下
// [1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2], [3,2,1].
// （以数字在数组中的位置靠前为优先级，按字典序排列输出。）
// 输入：
// [1,2,3]
// 复制
// 返回值：
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param num int整型一维数组 
 * @return int整型二维数组
 */
function permute(nums) {
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
}

let arr = [1, 3, 4, 2]
console.log(permute(arr))