/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let pre = null;
    let p = head;
    while (p) {
        let tmp = p.next;
        p.next = pre;
        pre = p;
        p = tmp;
    }
    return pre;
};