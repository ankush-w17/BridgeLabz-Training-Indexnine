prices =[100,200,300,400]
let P=250;
let lower;
let higer;
for(let i=0;i<prices.length;i++){
    if(prices[i]<=P){
        lower=prices[i];
    }
    if(prices[i]>P){
        higher=prices[i];
        break;
    }
}
let obj={};
obj["l"]=lower;
obj["h"]=higher;
console.log(obj);