// Question 2 - Roll-Seed Lock

let N = Number(prompt("Enter N:"));
let seed = Number(prompt("Enter seed:"));

let current = N;

for (let i = 0; i < 3; i++) {
  if (current % 2 === 0) {
    current = current / 2 + seed;
  } else {
    current = current * 3 - seed;
  }
}

let s = String(current);

if (current >= 100 && current <= 999 && Number(s[1]) === seed) {
  alert("YES, " + current);
} else {
  alert("NO, " + current);
}
