/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head,
        low = head;
    while (fast) {
        if (fast.next == null) return null;
        low = low.next;
        fast = fast.next.next;
        if (low == fast) {
            fast = head;
            while (true) {
                if (fast == low) {
                    return low;
                }
                fast = fast.next;
                low = low.next;
            }
        }
    }
    return null;
};