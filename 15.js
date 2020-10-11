/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    if(n==0) return 0
    let result=1;
    function code(nn){
        if(nn<=1) return
        if(nn%2==1) result++
        code(parseInt(nn/2))
    }
    code(n)
    return result
};