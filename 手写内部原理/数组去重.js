const _deleteRepeat = array => {
    return Array.from(new Set(array));
}
const _deleteRepeat1 = array => {
    let newArr = [];
    for (let i in array) {
        if (!newArr.includes(array[i])) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

const _deleteRepeat2 = array => {
    let newArr = [];
    for (let i in array) {
        if (newArr.indexOf(array[i]) == -1) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

let arr1 = [2, 3, 3, 44, 2, 5, 55, 5];

// console.log(_deleteRepeat(arr1))
console.log(_deleteRepeat2(arr1))