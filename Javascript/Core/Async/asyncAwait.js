const p= new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise resolved Value");
    }, 5000);

})

//await can only be used inside of an async function
//and it used to await the response of a promise
//await appeares to be blocking the execution thread until the promise is resolved

async function handlePromise(){
    const val=await p;
    console.log(val);
    console.log("inside handlePromise()");
}

handlePromise();


// In .then the flow doesn't wait the js engine executes the furthere commands and doesn't wait for promise to be resolved, 
//when after some time the promise gets resolved it shows the result (imp: it doesn't wait for promise to be resolved) unlike await

function getData(){
    p.then((res)=>console.log(res));
    console.log("Inside getData()");
}
getData();