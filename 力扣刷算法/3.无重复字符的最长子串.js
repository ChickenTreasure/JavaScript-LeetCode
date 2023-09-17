/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Set();
    let maxLen = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        while (map.has(s.charAt(right))) {
            map.delete(s.charAt(left));
            left++;
        }
        map.add(s.charAt(right));
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
<<<<<<< HEAD
};
=======
};
>>>>>>> c455786913ad2fd29272f6cca9ff28c1d30b1497
