Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        let a = 0;
        let b = promises.length;
        let c = [];
        for (let i = 0; i < b; i++) {
            Promise.resolve(promises[i].then(value => {
                a++;
                c[i] = value;
                if (a === b) return resolve(c);
            }, err => {
                return reject(error)
            }))
        }
    })
}