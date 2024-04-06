Array.prototype.newFilter = function (fn) {
    let filteredResult = [];
    for(let i=0; i<this.length; i++) {
        if(fn.call(this, this[i], i, this)) {
            filteredResult.push(this[i]);
        }
    }
    return filteredResult;
};

const filteredResult = [1, 2, 3, 4, 5].newFilter((el) => !!(el % 2));
console.log(filteredResult);