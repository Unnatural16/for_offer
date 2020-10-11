
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if(preorder.length==0)return null
    let val=0
    function code(start, end) {
        let index
        for (let i = start; i <= end; i++) {
            if (preorder[val] == inorder[i]) {
                index = i
            }
        }
        let node = new TreeNode(inorder[index])
        val++
        if (index > start) node.left = code(start, index - 1)
        if (index < end) node.right = code(index + 1, end)
        return node
    }
    return code(0, preorder.length - 1)
};
let a = buildTree([3,1,2,4],
    [1,2,3,4])
console.log(a)