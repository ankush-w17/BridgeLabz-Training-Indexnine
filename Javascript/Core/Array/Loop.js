//For each
let arr=[1,2,3]
arr.forEach(num =>{
     console.log(num * 2)
}); 

//filter
let evens = [1,2,3,4]
evens.filter(n =>{
    if(n % 2 === 0){
     console.log(n);
    }  
});

//map
let squares=[1,2,3]
squares.map((n) =>{
console.log(n*n);
})
     