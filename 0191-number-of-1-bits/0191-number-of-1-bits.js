/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let total = 0;
    for (let i = 0; i < 32; i++) {
        total += n & 1;
        n >>= 1;
    }
    return total;
};