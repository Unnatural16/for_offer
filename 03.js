/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let dict=new Set()
    for (let i = 0; i < nums.length;i++){
        if(dict.has(nums[i])){
            return nums[i]
        }
        dict.add(nums[i])
    }
};