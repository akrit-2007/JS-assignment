// Question 5 - Skipping Numbers
 
var N = Number(prompt("Enter N:"));
var seed = Number(prompt("Enter seed:"));
 
var divisor = seed + 2;
var sum = 0;
var m = 0;
 
while (sum < N) {
  m++;
  if (m % divisor !== 0) {
    sum += m;
  }
}
 
alert("m = " + m + ", sum = " + sum);
 
