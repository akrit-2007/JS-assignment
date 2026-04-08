// Question 4 - Fare Calculator
 
var base = Number(prompt("Enter base:"));
var distance = Number(prompt("Enter distance:"));
var minutesLate = Number(prompt("Enter minutesLate:"));
var seed = Number(prompt("Enter seed:"));
 
var fare = base + 7 * distance;
 
if (minutesLate > 15) fare += 20;
if (distance > 10) fare += Math.floor(0.10 * fare);
 
if (seed % 2 !== 0) {
  fare -= seed;
} else {
  fare += seed;
}
 
fare = Math.ceil(fare / 5) * 5;
 
alert(fare);
 
