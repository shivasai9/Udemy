const input = ['abcdefghijklmnopqrstuvwxyz', 'hello world', 'AbcdefghijklmnopqrstuvwxyZ', 'Abcdefghijklmnopqrstuvwxy'];

// solution - 1
// const alp = 'abcdefghijklmnopqrstuvwxyz';
// const result = input.filter(str=> {
//     const alpArr = alp.split('');
//     const strArr = str.split('');
//     for(let char of strArr) {
//         if(alpArr.includes(char.toLowerCase())) {
//             const index = alpArr.indexOf(char.toLowerCase());
//             alpArr.splice(index, 1);
//             if(alpArr.length === 0) return true;
//         }
//     }
//     return !alpArr.length;
// })

// solution - 2
const alpArr = 'abcdefghijklmnopqrstuvwxyz'.split[''];
const result = input.every()


console.log('=======result========', result);