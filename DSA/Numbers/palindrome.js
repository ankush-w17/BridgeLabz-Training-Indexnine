/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rev=0;
    let copy=x;
    while(copy>0){
        let dig=copy%10;
        copy=Math.floor(copy/10);
        rev=rev*10+dig;
    }
    if(x===rev)return true;
    return false;
};