
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};

function Dog(name, breed) {
  Animal.call(this, name); // call parent constructor
  this.breed = breed;
}

// Set up prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Override method
Dog.prototype.speak = function () {
  console.log(`${this.name} barks. Breed: ${this.breed}`);
};

const a = new Animal("Generic animal");
a.speak();

const d = new Dog("Tommy", "Labrador");
d.speak();

// Native prototypes (using them, not modifying)
const arr = [1, 2, 3];
console.log("Array prototype methods example - map:");
const squared = arr.map((x) => x * x);
console.log("squared:", squared);


Array.prototype.first = function () {
  return this[0];
};

console.log("first element of arr:", arr.first());
