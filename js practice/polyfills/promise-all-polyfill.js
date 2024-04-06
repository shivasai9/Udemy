
const newPromiseAll = function (promises) {
    let resolvedPromises = [];
    let allPromisesDone = 0;
    return new Promise((resolve, reject) => {
        for (let i=0; i<promises.length; i++) {
            const promise = promises[i];
            promise
                .then(pro => {
                    resolvedPromises[i] = pro;
                    allPromisesDone++;
                    if (allPromisesDone === promises.length) {
                        resolve(resolvedPromises);
                    }
                })
                .catch((err) => {
                    reject(err);
                })
        }
    })
}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(1)
        resolve(1);
    }, 2000)
});;
const promise2 = new Promise((resolve, reject) => {
    console.log(2)
    resolve(2)
});;
const promise3 = new Promise((resolve, reject) => {
    console.log(3)
    resolve(3)
});

newPromiseAll([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
