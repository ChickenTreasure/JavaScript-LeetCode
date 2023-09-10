/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */


//  ## 解题思路

//  双指针，先让一个指针q走n 步，然后另一个指针p一起走，当第一个指针q走到尾的时候，此时p指针就指向了我们要删除的节点，进行删除即可。
var removeNthFromEnd = function(head, n) {
    let p = new ListNode();
    p.next = head;
    let h1 = p;
    let h2 = p;
    while (n--) h1 = h1.next;
    while (h1.next) {
        h1 = h1.next;
        h2 = h2.next;
    }
    h2.next = h2.next.next;
    return p.next;
};