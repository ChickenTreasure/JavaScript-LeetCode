/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let reverse = (pre, cur) => {
        if (!cur) return pre;
        let tmp = cur.next;
        cur.next = pre;
        return reverse(cur, tmp);
    }
    let dummyHead = new ListNode();
    dummyHead.next = head;
    let p = dummyHead;
    let k = m - 1;
    // 先找到需要反转链表部分的前驱节点
    while (k--) {
        p = p.next;
    }
    // 保存前驱节点
    let front = p;
    // 找到需要反转链表部分的头节点
    let frontNode = front.next;
    k = n - m + 1;
    // 再找到需要反转链表部分的尾节点
    while (k--) {
        p = p.next;
    }
    // 找到需要反转链表部分的尾节点
    let endNode = p;
    // 保存后继节点
    let end = endNode.next;
    // 将后继值为空，开始反转链表
    endNode.next = null;
    front.next = reverse(null, frontNode);
    // 原本的反转链表部分的头节点现在变成了尾节点，指向原本的后继节点
    frontNode.next = end;
    return dummyHead.next;
};