/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let a=0,b=1;
    let c;
    if(n===0) return 0;
    if(n===1 || n==2) return 1;
    let i=2;
    while(i<=n){
        c=a+b;
        a=b;
        b=c;

        i++;
    }
    return c;
};