
function add(a) {
  return function (b) {
    return a + b;
  };
}

const add5 = add(5);
console.log("add5(10):", add5(10));

const addCurried = (a) => (b) => (c) => a + b + c;
console.log("addCurried(1)(2)(3):", addCurried(1)(2)(3));

// Hoisting example
hoistedFunction(); // works because function declarations are hoisted

function hoistedFunction() {
  console.log("I am hoisted!");
}

try {
  console.log(hoistedVar); // undefined, declaration hoisted but not assignment
  var hoistedVar = 42;
  console.log("hoistedVar after assignment:", hoistedVar);
} catch (e) {
  console.error("Error with hoistedVar:", e.message);
}

// Callbacks example
function fakeFetch(url, callback) {
  setTimeout(() => {
    if (!url) {
      callback(new Error("URL is required"));
    } else {
      callback(null, { url, data: "Some data from " + url });
    }
  }, 300);
}

fakeFetch("https://example.com", (err, result) => {
  if (err) return console.error("Callback error:", err.message);
  console.log("Callback result:", result);
});

console.log("Microtasks vs Macrotasks order:");
setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise.then callback (microtask)");
});

console.log("End of script");
