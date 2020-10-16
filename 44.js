/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    if(!n) return 0
    let temp = n
    for(var digits = 0; temp >0;digits++){
        temp -= (digits+1)*9*Math.pow(10,digits)
    }
    temp+=(digits)*9*Math.pow(10,digits-1)
    const idx=temp%digits
    let number=Math.pow(10,digits-1)+Math.floor(temp/digits)
    if(!idx){
        number--
        return number%10
    }else{
        return parseInt(number.toString()[idx-1])
    }
};4