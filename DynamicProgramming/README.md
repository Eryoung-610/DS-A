# Dynamic Programming

A method for solving a complex problem by breaking it down into a colleciton of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

Works on problems with optimal substructure & overlapping subproblems

Overlapping subproblems - A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times

Optimal substructure - A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems

Fibonacci Sequence - Every number after the first two are the sum off the two preceding ones

Memoization - Storing the results of expensive function calls and returning the cached result when the same inputs occur again

Tabulation - Storing the result of a previous result in a "table", usually done using iteration. Better space complexity can be achieved using tabulation