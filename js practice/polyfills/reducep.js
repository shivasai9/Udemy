Array.prototype.newReduce = function () {
    const fn = arguments[0];
    let reducedValue = arguments[1] || null;

    for(let i=0 ; i<this.length; i++) {
        if(reducedValue) {
            reducedValue = fn.call(this, reducedValue, this[i], i, this);
        } else {
            reducedValue = this[i];
        }
    }

    return reducedValue;
}

const reducedResult1 = [1, 2, 3, 4, 5].newReduce((acc, el, index, arr) => acc + el);
const reducedResult2 = [1, 2, 3, 4, 5].newReduce((acc, el, index, arr) => acc + el, 6);

console.log(reducedResult2);