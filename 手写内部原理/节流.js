const throttle = (fn, time) => {
    let timer = null;
    return function() {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
                timer = null;
            }, time)
        }
    }
}