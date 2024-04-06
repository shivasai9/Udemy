function flattenArray(arr) {
  let flattenedArray = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      flattenedArray = flattenedArray.concat(flattenArray(el));
    } else {
      flattenedArray.push(el);
    }
  }

  return flattenedArray;
}

const a = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]];

console.log(flattenArray(a));

// output: [1, 2, 3, 4, 5, 6, 7, 8, 9]