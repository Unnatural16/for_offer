/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    function code(i, j) {
        if (i >= j) return true;
        for (var point = i; point < j; point++) {
            if (postorder[point] > postorder[j]) {
                if(Math.min(...postorder.slice(point, j )) > postorder[j]) {
                    return code(i,point-1)&&code(point, j - 1)
                } return false
            }
        }
        return code(i, j - 1)
    }
    return code(0, postorder.length - 1)
};
console.log(verifyPostorder([5, 2, -17, -11, 25, 76, 62, 98, 92, 61]))