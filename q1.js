// Question 1 - Digit Gatekeeper

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

let L = Number(prompt("Enter L:"));
let R = Number(prompt("Enter R:"));
let K = Number(prompt("Enter K:"));

let count = 0;

for (let x = L; x <= R; x++) {
  if (x % K !== 0) continue;

  let digits = String(x).split("");
  if (digits.includes("0")) continue;

  let digitSum = digits.reduce((sum, d) => sum + Number(d), 0);
  if (isPrime(digitSum)) count++;
}

alert(count);
