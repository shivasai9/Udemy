Function.prototype.newBind = function () {
    const fn  = this;
    const context = arguments[0];
    const args = Array.prototype.slice.call(arguments, 1);

    return function () {
        let argments = Array.prototype.slice.call(arguments);
         return fn.call(context, ...args, ...argments);
    }
};

let x =10;
const obj = {
    x: 1,
    displayX: function () {
        console.log(this.x, arguments);
    }
}

const newAdd = obj.displayX.newBind(obj, 2);
const result1 = newAdd(3);
console.log(result1)