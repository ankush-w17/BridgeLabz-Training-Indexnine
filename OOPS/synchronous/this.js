
const calculator = {
  a: 10,
  b: 5,
  sum() {
    // "this" refers to calculator when called as calculator.sum()
    return this.a + this.b;
  },
  diff() {
    return this.a - this.b;
  },
};

console.log("sum:", calculator.sum());
console.log("diff:", calculator.diff());

// Losing "this" context
const looseSum = calculator.sum;
console.log("looseSum without bind (this is undefined in strict mode):");
try {
  console.log(looseSum());
} catch (e) {
  console.log("Error:", e.message);
}

// Fixing with bind
const boundSum = calculator.sum.bind(calculator);
console.log("boundSum:", boundSum());

// Constructor functions + "new"
function Car(brand, model) {
  // When called with new, "this" is a new empty object
  this.brand = brand;
  this.model = model;
  this.getName = function () {
    return `${this.brand} ${this.model}`;
  };
}

const car1 = new Car("Toyota", "Innova");
console.log(car1.getName());
