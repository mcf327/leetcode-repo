/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const current = values[s[i]];

        if (i < s.length - 1 && current < values[s[i + 1]]) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;

};