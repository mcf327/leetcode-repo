/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const dict = {};

    for (let letter of magazine) {
        dict[letter] = ++dict[letter] || 1;
    }

    for (let letter of ransomNote) {
        if (dict[letter] === 0 || !dict[letter]) {
            return false;
        }
        dict[letter]--;
    }

    return true;
};