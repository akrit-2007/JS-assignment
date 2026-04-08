// Question 1 - Digit Gatekeeper
 
function isPrime(n) {
  if (n < 2) return false;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
 
var L = Number(prompt("Enter L:"));
var R = Number(prompt("Enter R:"));
var K = Number(prompt("Enter K:"));
 
var count = 0;
 
for (var x = L; x <= R; x++) {
  if (x % K !== 0) continue;
 
  var digits = String(x).split("");
  if (digits.includes("0")) continue;
 
  var digitSum = digits.reduce((sum, d) => sum + Number(d), 0);
  if (isPrime(digitSum)) count++;
}
 
alert(count);
 
