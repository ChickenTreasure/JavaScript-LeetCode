/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return s;
    let res = '';
    let n = s.length;
    for (let i = 0; i < n; i++) {
        helper(i, i);
        helper(i, i + 1);
    }

    function helper(l, r) {
        while (l >= 0 && r < n && s[l] == s[r]) {
            l--;
            r++;
        }
        if (r - l - 1 > res.length) {
            res = s.slice(l + 1, r);
        }
    }
    return res;
};