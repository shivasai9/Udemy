function prefix(A) {
  let root = {};

  for (let i = 0; i < A.length; i++) {
    const word = A[i];
    let temp = root;

    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      if (char in temp) {
        temp[char]["count"] = temp[char]["count"] + 1;
        temp = temp[char]["address"];
      } else {
        const newNode = {};
        temp[char] = {};
        temp[char]["address"] = newNode;
        temp[char]["count"] = 1;
        temp = newNode;
      }
    }
  }

  let output = [];
  for (let i = 0; i < A.length; i++) {
    const word = A[i];
    let temp = root;

    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      if (temp[char]["count"] === 1) {
        output.push(word.slice(0, j + 1));
        break;
      }

      temp = temp[char]["address"];
    }
  }

  return output;
}

console.log("==================", prefix(["zebra", "dog", "duck", "dot"]));
