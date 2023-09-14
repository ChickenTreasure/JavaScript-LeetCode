Function.prototype._bind = function(context, ...args) {
    context = context || window;
    context.fn = this;
    return function newFn(...arguments) {
        if (this instanceof newFn) {
            return context.fn(...args, ...arguments)
        } else {
            return context.fn.call(context, ...args, ...arguments);
        }
    }
}