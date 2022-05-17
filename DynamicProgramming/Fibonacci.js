let fib = (n) => {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(7));

// Memoization
function fib (n, memo = []){
    if(memo[n] !== undefined) return memo[n]

    if(n <= 2) return 1;

    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

// Tabulated
function fib(n){
    if (n <= 2) return 1;
    let fibNums = [0,1,1];
    for (let i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}