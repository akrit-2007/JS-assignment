# JS-Assignment
**Course:** Fundamentals of Web Design - CSE 106  
**Assignment:** Assignment 4 - JavaScript Problems

---

## File Structure

| File | Question | Topic |
|------|----------|-------|
| q1.js | Question 1 | Digit Gatekeeper |
| q2.js | Question 2 | Roll-Seed Lock |
| q3.js | Question 3 | Mirror Corridor |
| q4.js | Question 4 | Fare Calculator |
| q5.js | Question 5 | Skipping Numbers |
| q6.js | Question 6 | Contest Score Judge |

---

## Approach and Complexity

### Q1 - Digit Gatekeeper
Loop through every integer from L to R. For each number, check three conditions: divisibility by K, absence of digit 0, and whether the digit sum is prime. The primality check runs up to √(digit sum), which is negligible.  
**Time Complexity:** O((R - L) × d) where d is the number of digits

### Q2 - Roll-Seed Lock
Apply the transformation rule exactly 3 times using a loop. After the loop, convert the result to a string to extract the middle digit (index 1) and compare it to seed.  
**Time Complexity:** O(1) — fixed 3 iterations

### Q3 - Mirror Corridor
Increment X from 0 upward. For each candidate N+X, check if it reads the same forwards and backwards (palindrome check via string reversal) and if it is divisible by K. Return the first X that satisfies both.  
**Time Complexity:** O(100000) worst case

### Q4 - Fare Calculator
Apply each fare rule sequentially in the exact order specified. Use Math.floor for the 10% surcharge and Math.ceil to round up to the nearest multiple of 5.  
**Time Complexity:** O(1) — fixed arithmetic operations

### Q5 - Skipping Numbers
Iterate m from 1 upward, adding m to the running sum only if m is not divisible by (seed + 2). Stop as soon as the sum reaches or exceeds N.  
**Time Complexity:** O(m) where m is the answer

### Q6 - Contest Score Judge
Compute the base score using the formula. Apply the negative-floor rule, then the total-questions penalty, then floor again if needed. Determine PASS or FAIL based on the final score.  
**Time Complexity:** O(1) — fixed arithmetic operations
