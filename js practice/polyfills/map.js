Array.prototype.newMap = function (fn) {
    let mappedArray = [];
    for(let i=0; i<this.length; i++) {
         const mappedEl = fn.call(this, this[i], i, this);
        mappedArray.push(mappedEl);
    }

    return mappedArray;
};

const mappedResult = [1, 2, 3, 4, 5].newMap((el) => el * 2);
console.log(mappedResult);