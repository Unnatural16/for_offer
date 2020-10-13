/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    for (var z = 0;z<nums.length; z++){
        nums[z] =nums[z].toString()
    }
    function sortcode(a,b){
        return a.concat(b)-b.concat(a)
    }
    nums.sort(sortcode)
    return nums.join('')
};