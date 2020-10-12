/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0,j=nums.length-1;i<j;){
        let result = nums[i]+nums[j]
        if(result==target){
            return [nums[i],nums[j]]
        }else if(result>target){
            j--
        }else{
            i++
        }
    }
    return false
};