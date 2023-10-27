function _new() {
    let fn = [...arguments].shift();
    let obj1 = {};
    obj1.__proto__ = fn.prototype;
    let obj2 = fn.apply(obj1, Array.prototype.slice.call(arguments, 1));
    return obj2 instanceof Object ? obj2 : obj1;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function() {
    console.log(this.name);
};

const person1 = _new(Person, 'Tom', 20); // 将参数传递给 _new 函数时需要将构造函数 Person 作为第一个参数传入
console.log(person1); // Person {name: "Tom", age: 20}
person1.sayName(); // 'Tom'