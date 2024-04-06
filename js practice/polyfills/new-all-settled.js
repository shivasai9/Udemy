function newAllSettled(promises) {
    let resolvedPromises = [];
    let resolvedPromisesCount = 0;

    return new Promise(resolve => {
        for (let i = 0; i < promises.length; i++) {
            const promise = promises[i];
            promise
                .then((resolvedData) => {
                    resolvedPromises[i] = {value: resolvedData, status: 'fulfilled'};
                    resolvedPromisesCount++;
                    if (resolvedPromisesCount === promises.length) {
                        resolve(resolvedPromises);
                    }
                })
                .catch((error) => {
                    resolvedPromises[i] = {reason: error, status: 'rejected'};
                    resolvedPromisesCount++;
                    if (resolvedPromisesCount === promises.length) {
                        resolve(resolvedPromises);
                    }
                })
        }
    })


};

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

newAllSettled(promises).
    then((results) => results.forEach((result) => console.log(result.status)))
