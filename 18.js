/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    const result = head
    let pre=head
    if(head.val===val) return head.next
    head=head.next
    while(head!==null){
        if(head.val===val){
            pre.next=head.next
            break
        }
        head=head.next
        pre=pre.next
    }
    return result
};