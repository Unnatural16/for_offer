/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let head={}
    let cur=head
    while (true) {
        if(l1==null){
            cur.next=l2
            return head.next
        }else if(l2==null){
            cur.next=l1
            return head.next
        }
        if(l1.val<l2.val){
            cur.next=l1
            l1=l1.next
        }else{
            cur.next=l2
            l2=l2.next
        }
        cur=cur.next
    }
};
let a={ val:1,next:{val:2,next:{val:3}}}
let b={ val:1,next:{val:3,next:{val:4}}}
console.log(mergeTwoLists(a,b))
