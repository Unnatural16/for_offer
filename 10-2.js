/**
 * @param {number} n
 * @return {number}
 */
let dict={1:1,2:2};
var numWays = function(n) {
    if(n==0)return 1
    if(dict[n]!=null)return dict[n];
    let a=(numWays(n-1)+numWays(n-2))%1000000007;
    dict[n]=a;
    return a;
};