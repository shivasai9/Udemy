
const inputEl = document.getElementById('input');
let a = 10;
let obj = {
    a: 20,
    printEvent: function(event) {
        console.log('====printEvent====', this.a)
    }
}
function onChange(event) {
    console.log("=====", event.target.value, a);
}

let timeOut;
function debounce(fn, interval) {
    return function (event) {
        if(timeOut) clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            // fn.call(this, event)
            fn(event)
        }, interval)
    }
}
console.log("====================", obj.printEvent())
const fn = obj.printEvent.bind(obj);
const debouncedOnChange = debounce(fn, 1000);
inputEl.addEventListener('keypress', debouncedOnChange);