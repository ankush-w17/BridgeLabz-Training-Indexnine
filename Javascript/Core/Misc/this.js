console.log(this);

function x(){
    console.log(this)// In normal/non-strict mode the value will be window object but in strict mode it'll be undefined
}

//If the value of this is undefined but if we are in non-strict mode the undefined gets replaced with globalObject

const obj={
    a: "ankush",
    b: function(){
        console.log(this);
    }
}

obj.b();

//The value of this depends on from where it is being called, if it is inside an object then the value of this will be the object
//if it is being called outside any object then it's value will be the gobalObject ie: Window object in the browser
