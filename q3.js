// Question 3 - Mirror Corridor

function isPalindrome(n) {
  let s = String(n);
  return s === s.split("").reverse().join("");
}

let N = Number(prompt("Enter N:"));
let K = Number(prompt("Enter K:"));

let found = false;

for (let X = 0; X <= 100000; X++) {
  let val = N + X;
  if (isPalindrome(val) && val % K === 0) {
    alert(X);
    found = true;
    break;
  }
}

if (!found) alert(-1);
