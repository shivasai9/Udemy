const numberEncription = (numbers, instructions) => {
    let numArr = numbers.split('').map(n => +n);
    const instructionsArr = instructions.split('');

    let currentIndex = 0;
    for (let i = 0; i < instructionsArr.length; i++) {
        const action = instructionsArr[i];
        if (action === 'R') currentIndex++;
        else if (action === 'L') currentIndex--;
        else if (action === 'T') {
            numArr[currentIndex] = numArr[currentIndex] < 9 ? numArr[currentIndex] + 1 : numArr[currentIndex];
        }
        else if (action === 'D') {
            numArr[currentIndex] = numArr[currentIndex] > 0 ? numArr[currentIndex] - 1 : numArr[currentIndex];
        }
        else if (action === 'S') {
            const index1 = instructionsArr[i + 1] - 1;
            swap(numArr, index1, currentIndex);
        }
    }
    return numArr.join('');
}

const swap = (arr, i1, i2) => {
    const temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

const numbers = '123456';
const instructions = 'RLTDRRTRS2S1';
const result = numberEncription(numbers, instructions);
console.log('======result======', result);