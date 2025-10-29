const button = document.getElementById("btn");

function wrapper(){
    let count=0;
    button.addEventListener("click",function func(){
        console.log("Button Clicked",++count);
    })
}

wrapper();



console.log("hello world")