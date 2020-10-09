/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let pre =number[0]
    if(numbers.length==1)return pre
    for(let i=1;i<numbers.length;i++){
        if(numbers[i]<pre){
            return numbers[i]
        }
        pre=numbers[i]
    }
};