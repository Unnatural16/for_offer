/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    if (root == null) return []
    if (root.left == null && root.right == null) {
        if (sum == root.val) return [[sum]]
        else return []
    }
    const right = pathSum(root.right, sum - root.val)
    const left = pathSum(root.left, sum - root.val)
    if (right.length==0 && left.length==0) {
        return []
    }
    let result = []
    if (right.length!=0) {
        result.push(...right)
    }
    if (left.length!=0) {
        result.push(...left)
    }
    result.forEach(element => {
        element.unshift(root.val)
    });
    return result
};
let a = {
    val: 5,
    left: { val: 4 ,left:{ val:-1}}, right: { val: 3 }
}
console.log(pathSum(a,8))