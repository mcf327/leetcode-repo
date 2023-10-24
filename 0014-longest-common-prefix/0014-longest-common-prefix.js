/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
        if (strs.length === 0) {
        return "";
    }

    strs.sort();

    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];

    let prefix = "";
    const minLength = Math.min(firstStr.length, lastStr.length);

    for (let i = 0; i < minLength; i++) {
        if (firstStr[i] === lastStr[i]) {
            prefix += firstStr[i];
        } else {
            break; 
        }
    }

    return prefix;
};