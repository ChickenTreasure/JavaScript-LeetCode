/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (!root) return [];
    let res = [];
    let fun = (root) => {
        if (root) res.push(root.val);
        root.left && fun(root.left);
        root.right && fun(root.right);
    }
    fun(root);
    return res;
};