/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
    let max=Math.pow(10,n)
    let result = []
    for(let i=0;i<max;i++) {
        result.push(i)
    }
    return result
};