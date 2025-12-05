"use strict";

const user = {
  name: "Ankush",
  age: 21,
  isStudent: true,
};

console.log("user:", user);

// Object references vs copying
const sameRef = user; // reference to same object
sameRef.age = 22;

console.log("user after sameRef change:", user); // age changed

// Shallow copy using spread
const copyUser = { ...user };
copyUser.name = "Copy Ankush";

console.log("original user:", user);
console.log("copied user:", copyUser);

// Deep-ish copy using JSON (for simple data only)
const deepCopyUser = JSON.parse(JSON.stringify(user));
deepCopyUser.isStudent = false;

console.log("deepCopyUser:", deepCopyUser);

// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name} is ${this.age} years old`;
  }
}

const p1 = new Person("Alice", 30);
console.log(p1.describe());


let temp = { value: 123 };
console.log("temp before:", temp);

