//if a function takes a function as an arguement then it is an higher order function

function xyz(x) { //xyz is higher order function
  console.log(x);
}

function x() {
  console.log("hello from x");
}

xyz(x.toString());

//Function  code down below

//Each task is divided into it's separate function and we don't need to repeat ourselvse  and we also utilize higher order functions

//this is more efficient than writing separeate function for each task


const radius = [3,1,2,4]

const area= function(radius){
    return Math.PI*radius*radius;
}

const circumference= function(radius){
    return 2* Math.PI*radius;
}

const calculate = function (radius,logic){  //This function is exactly same as map
    const newArray=[]
    for(let i=0;i<radius.length;i++){
        newArray.push(logic(radius[i]));
    }
    return newArray
}


console.log(calculate(radius,area));
console.log(calculate(radius,circumference));