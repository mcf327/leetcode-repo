/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0;
    let approx = x;
    while (true) {
        const newApprox = (approx + x / approx) /2;
        if (Math.floor(newApprox) === Math.floor(approx)) {
            return Math.floor(approx);
        }
        approx = newApprox;
    }
};