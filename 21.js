/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    for (var i=0,j=nums.length-1;i<j;) {
        if(nums[i]%2==0&&nums[j]%2==1) {
            let temp=nums[i]
            nums[i]=nums[j]
            nums[j]=temp
            i++
            j--
            continue
        }
        if(nums[i]%2==1){
            i++
        }
        if(nums[j]%2==0){
            j--
        }
    }
    return nums
};