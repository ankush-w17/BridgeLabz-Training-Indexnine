function add(a,b){
    console.log(a+b);
}
function subtract(a,b){
    console.log(a-b);
}
function multiply(a,b){
    console.log(a*b);
}
function divide(a,b){
    try{
        console.log(a/b);
    }
    catch(error){
        console.log(error);
    }
}


module.exports={
    add,
    subtract,
    multiply,
    divide
};