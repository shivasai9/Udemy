Array.prototype.newFlatten = function () {
    let flattenedArray = [];
    for (let el of this) {
        if (Array.isArray(el)) {
            flattenedArray = flattenedArray.concat(el.newFlatten());
        } else {
            flattenedArray.push(el);
        }
    }

    return flattenedArray;
};

const array = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]];

console.log(array.newFlatten());