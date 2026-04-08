// Question 3 - Mirror Corridor
 
function isPalindrome(n) {
  var s = String(n);
  return s === s.split("").reverse().join("");
}
 
var N = Number(prompt("Enter N:"));
var K = Number(prompt("Enter K:"));
 
var found = false;
 
for (var X = 0; X <= 100000; X++) {
  var val = N + X;
  if (isPalindrome(val) && val % K === 0) {
    alert(X);
    found = true;
    break;
  }
}
 
if (!found) alert(-1);
 
