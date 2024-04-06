function countUniqueValues(arr) {
    if (!arr.length) return 0;

    let i = 1;
    let counter = 1;
    while (i < arr.length) {
        if (arr[i - 1] !== arr[i]) {
            counter++;
        }
        i++;
    }
    return counter;
}

const res = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
const res2 = countUniqueValues([-2,-1,-1,0,1]);
console.log("=========res=======", res);
console.log("=========res2=======", res2);