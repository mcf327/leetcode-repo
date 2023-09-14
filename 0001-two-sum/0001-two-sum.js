/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numData = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (numData[complement] !== undefined) {
            return [numData[complement], i];
        }
        numData[num] = i;
    }
    return null;
};