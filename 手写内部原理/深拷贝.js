const sampleDeepClone = target => {
    if (!target || typeof target !== 'object') return target;
    let results = Array.isArray(target) ? [] : {};
    for (let i in target) {
        results[i] = sampleDeepClone(target[i]);
    }
    return results;
}

let arr1 = { a: 22, b: 'str', c: { aa: 123, bb: '123' } };

console.log(sampleDeepClone(arr1))


const DeepClone = function(target) {
    if (!target || typeof target !== 'object') return target;
    let results = Array.isArray(target) ? [] : {};
    for (let i in target) {
        results[i] = DeepClone(target[i]);
    }
    return results;
}