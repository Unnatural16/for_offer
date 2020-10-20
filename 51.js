/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    let sum = 0
    function merge(left, right) {
        let result =[]
        let i=0,j=0
        while (i<left.length||j<right.length){
            if(left[i]==null){
                result.push(right[j++])
            }else if(right[j]==null){
                result.push(left[i++])
            }else if(left[i]<=right[j]){
                result.push(left[i++])
            }else{
                result.push(right[j++])
                sum+=left.length-i
            }
        }
        return result
    }
    function sort(nums){
        if(nums.length <=1){
            return[...nums]
        }else{
            const mid=Math.ceil(nums.length/2)
            return merge(sort(nums.slice(0, mid)),sort(nums.slice(mid,nums.length)))
        }
    }
    sort(nums)
    return sum
};
console.log(reversePairs([1,3,2,3,1]))