Function.prototype._call = function(context, ...args) {
    context = context || window;
    context.fn = this;
    let b = context.fn(...args);
    delete context.fn;
    return b;
}

function greet() {
    console.log(this.animal, "的睡眠时间一般在", this.sleepDuration, "之间");
}

const obj = {
    animal: "猫",
    sleepDuration: "12 到 16 小时",
};

greet._call(obj); // 猫 的睡眠时间一般在 12 到 16 小时 之间