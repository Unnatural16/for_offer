function qiuhe(num){
    return num%10+parseInt(num/10)
}
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let flag=[]
    let result=0
    function code(x,y){
        if(qiuhe(x)+qiuhe(y)>k||x>=m||y>=n||flag[y*m+x]){
            return
        }
        result++
        flag[y*m+x]=true
        code(x+1,y)
        code(x,y+1)
    }
    code(0,0)
    return result
};