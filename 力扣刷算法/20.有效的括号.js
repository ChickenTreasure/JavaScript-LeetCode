/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    let map = new Map();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');
    for (let item of s) {
        if (map.has(item)) stack.push(map.get(item));
        else if (item === stack[stack.length - 1]) stack.pop();
        else return false;
    }
    if (stack.length) return false;
    return true;
};