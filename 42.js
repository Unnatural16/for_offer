// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function (nums) {
//     if (nums.length == 0) return null
//     if (nums.length == 1) return nums[0]
//     let result = [nums[0]]
//     for (let i = 1; i < nums.length; i++) {
//         result.push(Math.max(nums[i], result[i-1] + nums[i]))
//     }
//     return Math.max(...result)
// };
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length == 0) return null
    if (nums.length == 1) return nums[0]
    let pre=nums[0],result=pre
    for (let i = 1; i < nums.length; i++) {
        pre=(Math.max(nums[i], pre + nums[i]))
        result=Math.max(pre,result)
    }
    return result
};
console.log(maxSubArray(
    [-2, 1, -3, 4, -1, 2, 1, -5, 4])) 