/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
let result;
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head==null) return head;
    sub_reverseList(head);
    return result;
};
var sub_reverseList = function(head) {
    if(head.next==null){
        result = head;
        return head;
    }
    let node = sub_reverseList(head.next);
    head.next=null;
    node.next=head;
    return head;
};