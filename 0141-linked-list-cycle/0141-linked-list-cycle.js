/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let ptr = head;
    while (ptr && ptr.next) {
        head = head.next;
        ptr = ptr.next.next;
        if (head === ptr) return true;
    }
    return false;
};