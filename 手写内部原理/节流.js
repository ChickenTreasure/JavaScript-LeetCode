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


let throttle1 = (fn, time) => {
    let timer = null;
    return function() {
        if (!timer) {
            setTimeout(() => {
                fn.apply(this, arguments);
                timer = null;
            }, time)
        }
    }
}