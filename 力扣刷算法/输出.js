const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

console.log(obj.hasOwnProperty("1"));
console.log(obj.hasOwnProperty(1));
console.log(set.has("1"));
console.log(set.has(1));
//true true false true

// function hiLeke() {
//     console.log(name);
//     console.log(age);
//     var name = 'Leke';
//     let age = 8;
// }
// hiLeke();
// var name = 'HILEKE'
//undefined ReferenceError

const obj1 = {
    name: 'object',
    showName: function() {
        console.log(this.name);
    }
}
const show = obj1.showName;
show()
    //undefined

function Person(name) {
    this.name = name;
    return { name: 'Jane' };
}
const person = new Person('John');
console.log(person)