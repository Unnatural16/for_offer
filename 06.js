/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let result = [];
    function code(node){
        if(node===null) return
        code(node.next)
        result.push(node.value);
    }
    code(head)
    return result
};