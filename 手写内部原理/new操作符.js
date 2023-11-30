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

const _new = function() {
    let obj1 = {}; // 创建一个新的空对象

    let fn = [...arguments].shift(); // 获取传入的构造函数

    obj1.__proto__ = fn.prototype; // 将新对象的原型链接到构造函数的原型

    let obj2 = fn.apply(obj1, arguments); // 使用指定的参数和上下文调用构造函数

    return obj2 instanceof Object ? obj2 : obj1; // 如果构造函数返回一个对象，则返回该对象；否则，返回新创建的对象
}