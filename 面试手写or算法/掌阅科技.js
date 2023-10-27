/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param n int整型 
 * @return int整型
 */
function reverseNumber(n) {
    // write code here
    let results;
    if (n >= 0) {
        results = n.toString();
        return parseInt(results.split('').reverse().join(''));
    } else {
        results = n.toString();
        results = results.slice(1)
        return parseInt(-results.split('').reverse().join(''));
    }
}
module.exports = {
    reverseNumber: reverseNumber
};