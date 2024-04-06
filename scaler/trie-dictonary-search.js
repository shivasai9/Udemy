function solve(A, B) {
  function TrieNode() {
    this.isEnd = false;
    this.charList = {};
  }

  let rootNode = new TrieNode();

  for (let i = 0; i < A.length; i++) {
    const word = A[i];
    const wordArr = word.split("");
    let tempNode = rootNode;
    for (let j = 0; j < wordArr.length; j++) {
      const char = wordArr[j];
      if (char in tempNode.charList) {
        tempNode = tempNode.charList[char];
      } else {
        const newNode = new TrieNode();
        tempNode.charList[char] = newNode;
        tempNode = newNode;
      }

      if (j === wordArr.length - 1) {
        tempNode.isEnd = true;
      }
    }
  }

  console.log(rootNode)

  let output = [];
  for (let i = 0; i < B.length; i++) {
    const word = B[i];
    const wordArr = word.split("");
    let tempNode = rootNode;
    for (let j = 0; j < wordArr.length; j++) {
      const char = wordArr[j];

      if (char in tempNode.charList) {
        tempNode = tempNode.charList[char];
        if (tempNode.isEnd) {
            output.push(1);
            break;
          }
        if(j === wordArr.length - 1) {
            output.push(0);
            break;
        }
      } else {
        output.push(0);
        break;
      }
    }
  }

  return output;
}

const a =  [ "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg" ];
const b = [ "a", "b", "ab", "abcd" ];

console.log("============================", solve(a, b));