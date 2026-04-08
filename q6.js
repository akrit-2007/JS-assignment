// Question 6 - Contest Score Judge
 
var a = Number(prompt("Enter correct answers (a):"));
var b = Number(prompt("Enter partially correct (b):"));
var c = Number(prompt("Enter wrong answers (c):"));
 
var score = 3 * a + b - 2 * c;
 
if (score < 0) score = 0;
if (a + b + c > 50) score -= 10;
if (score < 0) score = 0;
 
var status = score >= 60 ? "PASS" : "FAIL";
 
alert(score + ", " + status);
 
