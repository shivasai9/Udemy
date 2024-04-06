Array.prototype.newForEach = function (fn) {
    for (let i = 0; i < this.length; i++) {
        fn.call(this, this[i], i, this)
    };
}
const numbers = [1, 2, 3, 4, 5];
numbers.newForEach((el, i, arr) => {
    console.log(el, i, arr);
});