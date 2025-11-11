/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str="";
    for(let i=0;i<strs[0].length;i++){
    let ch=strs[0][i];
    let flag=true;
        for(let j=0;j<strs.length;j++){
            if(strs[j][i]!==ch){
                flag=false;
                break;
            }
        }
        if(flag===true){
            str+=ch;
        }
        else{
            break;
        }
    }
    return str;
};