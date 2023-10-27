const debounce = (fn, time) => {
    let timer = null;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, time)
    }
}


const debounce1 = (fn, time) => {
    let timer = null;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, time)
    }
}

const throttle = (fn, time) => {
    let timer = null;
    return function() {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, arguments);
                timer = null;
            }, time)
        }
    }
}