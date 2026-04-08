Q1 Approach
Loop from L to R
Extract digits using % 10
Skip numbers containing 0
Compute digit sum
Check if sum is prime
Complexity = O(N log N)

Q2 Approach
Use loop (3 iterations)
Apply conditions
Extract middle digit using division
Complexity = O(1)

Q3 Approach
Loop X from 0 to 100000
Check palindrome using reverse
Check divisibility
Complexity = O(N × digits)

Q4 Approach
base + 7 × distance
Add 20 if late
Add 10% if distance > 10
Adjust using seed
Round to nearest multiple of 5
Complexity = O(1)

Q5 Approach
Loop from 1 onwards
Skip numbers divisible by (seed+2)
Keep adding until sum ≥ N
Complexity = O(m)

Q6 Approach
If negative → 0
If total attempts > 50 → subtract 10
PASS if score ≥ 60
Complexity = O(1)
