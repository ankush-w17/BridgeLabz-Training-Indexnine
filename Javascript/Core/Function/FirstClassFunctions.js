//Function ability to be used as valuse in arguements and parameters in javascript makes it first class function

function xyz(x) {
  console.log(x);
}

function x() {
  console.log("hello from x");
}

xyz(x.toString());
