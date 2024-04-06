function climbStairs(A) {
  if (A === 1 || A === 2) return A;
  let a = BigInt(1);
  let b = BigInt(2);
  let c = BigInt(3);

  for (let i = 3; i <= A; i++) {
    c = a + b;
    a = b;
    b = c;
  
}

  return Number(c % BigInt(1000000007));
}


console.log("=============", climbStairs(55007))