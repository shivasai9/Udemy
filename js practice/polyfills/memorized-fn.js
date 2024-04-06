function memorizedFn(fn) {
    let cache = {};

    return function () {
        const argStr = JSON.stringify(arguments);
        if (argStr in cache) {
            return cache[argStr];
        } else {
            cache[argStr] = fn.call(this, ...arguments);
            return cache[argStr];
        }
    }
};

function complexFn(a) {
    const el = a * 1000;
    console.log(a, el)
    i = 0;
    let sum = 0;
    while (i < el) {
        sum += i;
        i++;
    }

    return sum;
}

const memFn = memorizedFn(complexFn);
console.time();
console.log(memFn(10));
console.timeEnd();

console.time();
console.log(memFn(10));
console.timeEnd();

console.time();
console.log(memFn(100));
console.timeEnd();

console.time();
console.log(memFn(100));
console.timeEnd();