const _instanceof = (target, Fn) => {
    let a = target.__proto__;
    let b = Fn.prototype;
    while (true) {
        if (a == b) return true;
        if (!a) return false;
        a = a.__proto__;
    }
}