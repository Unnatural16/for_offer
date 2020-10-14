/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function code(A,B){
    if(B==null){
        return true;
    }
    if(A==null||A.val!=B.val){
        return false;
    }
    return code(A.left,B.left)&&code(A.right,B.right)
}
function find(M,N){
    if(M==null) return false
    if(M.val==N.val){
        if(code(M,N))return true
    }
    return find(M.left,N)||find(M.right,N)
}

/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(F, G) {
    
    if(B==null)return false
    return find(F,G)
};