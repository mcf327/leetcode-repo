/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let el = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if(count === 0) {
            el = nums[i];
            count = 1;
        } else if (nums[i] === el) {
            count++;
        } else {
            count--;
        }
    }
    return el;
};