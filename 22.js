/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

    let result = [];
    //turn取值1,2,3,4:上，右，下，左
    function code(x, y, turn) {
        if(matrix.length==0) return [];
        result.push(matrix[y][x])
        matrix[y][x] = null
        if (turn == 1) {
            if (matrix[y - 1]&&matrix[y - 1][x] != null) {
                code(x, y - 1, 1)
            } else if (matrix[y]&&matrix[y][x + 1] != null) {
                code(x + 1, y, 2)
            } else {
                return
            }
        } else if (turn == 2) {
            if (matrix[y]&&matrix[y][x + 1] != null) {
                code(x + 1, y, 2)
            } else if (matrix[y+1] &&matrix[y + 1][x] != null) {
                code(x, y + 1, 3)
            } else {
                return
            }
        } else if (turn == 3) {
            if (matrix[y + 1]&&matrix[y + 1][x] != null) {
                code(x, y + 1, 3)
            } else if (matrix[y]&&matrix[y][x - 1] != null) {
                code(x - 1, y, 4)
            } else {
                return false
            }
        } else {
            if (matrix[y]&&matrix[y][x - 1] != null) {
                code(x - 1, y, 4)
            } else if (matrix[y - 1]&&matrix[y - 1][x] != null) {
                code(x, y - 1, 1)
            } else { return }
        }
    }
    code(0,0,2)
    return result
};