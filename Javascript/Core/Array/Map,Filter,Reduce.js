const arr=[2,4,7,441,6,8,5]

//map 1st way
function double(x){
    return x*2;
}

let output=arr.map(double);

console.log(output);

//map 2nd way (shorter)

let output2=arr.map((x) => x*2);
console.log(output2);

//Filter
//It is just used to filter values from an array

let evenNos=arr.filter((x) => x%2===0)
console.log(evenNos);

//Reduce
//It is used to find a single value from a whole array, maybe you want to find out the sum or max value


// It take two arguments, (i) One function with two vars, accumulator and current, (ii) a starting value of accumulator
//Variable names can be changed accordingly

//finding sum the normal way first

function findSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

console.log(findSum(arr));

//Now using Reduce

let sum=arr.reduce((acc,curr) => acc+=curr ,0);
console.log(sum);

//Finding max using reduce

let max=arr.reduce((max,curr) => {
    if(curr>max){
        max=curr;
    }
    return max;
},0)

console.log(max);




//Real world example for map filter reduce

const users=[
    {firstName:"Ankush", lastName:"Wadhwani",age:21},
    {firstName:"John", lastName:"doe",age:21},
    {firstName:"Balraj", lastName:"Singh",age:25},
    {firstName:"Shiv", lastName:"Prakash",age:52}
]

//Find full names

let fullName=users.map(x => x.firstName + " " + x.lastName);
console.log(fullName);

// find number of people of each age
// ex output {26:2, 40:1}


let age=users.reduce((acc,curr) =>{
    if(acc[curr.age]){
        acc[curr.age]++;
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{})

console.log(age);



//Find first name of people whose age is less than 30

let ageLessThan30=users.filter(x => x.age<30).map(x => x.firstName);

console.log(ageLessThan30);


//same using reduce

let ageLessThan40=users.reduce((acc,curr) =>{
    if(curr.age<40){
        acc.push(curr.firstName);
    }
    return acc;
},[])
console.log(ageLessThan40);