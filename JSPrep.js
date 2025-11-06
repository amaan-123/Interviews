// console.log("5" + 1); // '51' (string)
// console.log("5" - 1); // 4   (number)
// console.log(true + 1); // 2

// Number("42"); // 42
// String(100); // '100'
// Boolean(0); // false

// let arr = ["a", "b", "c"];
// for (let val of arr) {
//   console.log(val); // a b c
// }

// let user = { name: "Salaam", age: 22 };
// for (let key in user) {
//   console.log(key, ":", user[key]);
// }
// // name : Salaam
// // age : 22

// function greetUser(name, callback) {
//   console.log("Hello", name);
//   callback();
// }
// function done() {
//   console.log("Login successful");
// }
// greetUser("Salaam", done);

// function sum(...nums) {
//   return nums.reduce((a, b) => a + b);
// }
// console.log(sum(1, 2, 3)); // 6
// function logAll(...args) {
//   console.log(args);
// }
// logAll(1, 2, 3); // [1,2,3]

// const car = { brand: "BMW", color: "black", year: 2022 };
// console.log(Object.keys(car)); // ['brand', 'color', 'year']
// console.log(Object.values(car)); // ['BMW', 'black', 2022]
// console.log(Object.entries(car)); // [['brand','BMW'], ['color','black'], ['year',2022]]

// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }
// const increment = counter();
// console.log(increment()); // 1
// console.log(increment()); // 2
// console.log(increment()); // 3

// function createUser(name) {
//   let score = 0;
//   return {
//     getName: () => name,
//     increaseScore: () => ++score,
//   };
// }

// const user = createUser("Salaam");
// console.log(user.getName()); // Salaam
// console.log(user.increaseScore()); // 1
// console.log(user.increaseScore()); // 2

// const user = { profile: { address: { city: "Delhi" } } };
// console.log(user.profile?.address?.city); // Delhi
// console.log(user.contact?.email); // undefined (safe)

// let original = [{ id: 1 }, { id: 2 }];
// let copy = original.slice(0, 1); // copy = [{id: 1}]
// copy[0].id = 99; // mutate the object
// console.log(original[0].id); // 99  ← same object is referenced

//Destructuring
// const [a, b] = [10, 20];
// console.log(a, b); // 10 20
// const { name, age } = { name: "Salaam", age: 22 };
// console.log(name, age); // Salaam 22

// const user = { name: "Salaam" };
// console.log(user.__proto__ === Object.prototype); // true
// // OR
// console.log(Object.getPrototypeOf(user) === Object.prototype); // true

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;
// console.log(dog.eats); // true (inherited)
// console.log(dog.barks); // true
// console.log(dog.hasOwnProperty("eats")); // false
// console.log(dog.hasOwnProperty("barks")); // true

// function Employee(name, role) {
//   this.name = name;
//   this.role = role;
// }
// Employee.prototype.describe = function () {
//   console.log(`${this.name} works as ${this.role}`);
// };
// const emp = new Employee("Skarlem", "Developer");
// emp.describe();
// // `Employee` is a constructor function. When you call it with `new`:
// // 1. A brand‑new object is created and its internal `[[Prototype]]` is set to `Employee.prototype`.
// // 2. `this` inside the constructor points to that new object, so the assignments `this.name = …` and `this.role = …` become its own properties.
// // 3. The object is returned and stored in `emp`.
// // ```js
// // function Employee(name, role) {
// //   this.name = name;   // own property
// //   this.role = role;   // own property
// // }
// // ```
// // The method `describe` is added to the **prototype** of `Employee`:
// // ```js
// // Employee.prototype.describe = function () {
// //   console.log(`${this.name} works as ${this.role}`);
// // };
// // ```
// // Because `emp`’s prototype chain includes `Employee.prototype`, `emp` can access `describe` even though the method isn’t an own property of `emp`. When `emp.describe()` runs, `this` refers to `emp`, so the template literal prints the instance’s `name` and `role`.
// // Output:
// // ```
// // Skarlem works as Developer
// // ```

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Hello, I'm ${this.name}`);
//   }
// }

// const user = new Person("Salaam", 22);
// user.greet(); // Hello, I'm Salaam
// // ### Why there’s no `function` keyword in a class definition

// // A **class** in JavaScript is *syntactic sugar* for the same prototype‑based mechanics you would write by hand with constructor functions. The language designers chose a different, more declarative syntax that reads like a class definition in many other languages, so the `function` keyword is omitted entirely.

// // Under the hood, the class you wrote is transformed (by the JavaScript engine) into roughly the following prototype‑based code:

// // ```js
// // // ---- what the engine creates for the class ----
// // function Person(name, age) {          // ← constructor function
// //   this.name = name;                   // own properties
// //   this.age = age;
// // }

// // // methods become properties of the prototype
// // Person.prototype.greet = function () {
// //   console.log(`Hello, I'm ${this.name}`);
// // };

// // // the class itself is a value (the constructor function)
// // ```

// // #### What the transformation does

// // | Class syntax element | What the engine generates |
// // |----------------------|---------------------------|
// // | `class Person { … }` | A **constructor function** named `Person`. |
// // | `constructor(...) { … }` | The **body of that function** (the code that runs when `new Person()` is called). |
// // | `methodName() { … }` | A **property** on `Person.prototype` whose value is a regular function (`function (…) { … }`). |
// // | `static staticMethod() { … }` | A **property on the constructor function itself** (`Person.staticMethod = function (…) { … }`). |

// // Because the engine creates ordinary functions for the constructor and each method, the `function` keyword is *implicitly* present in the generated code, even though you never write it.

// // ### Key differences that the class syntax enforces

// // | Feature | Constructor‑function style | Class syntax |
// // |---------|----------------------------|--------------|
// // | **Hoisting** | Function declarations are hoisted (you can call them before they appear). | Classes are **not hoisted** – you must declare them before using `new`. |
// // | **Strict mode** | Not automatically strict; you have to add `"use strict"` yourself. | Always runs in strict mode, which prevents accidental globals and other sloppy‑code pitfalls. |
// // | **Method enumerability** | Methods added manually to the prototype are **enumerable** by default. | Methods defined inside a class are **non‑enumerable** (like built‑in class methods). |
// // | **`new` enforcement** | Calling a constructor without `new` creates a regular call; `this` may be `undefined` (strict mode) or the global object. | Attempting to call a class without `new` throws a `TypeError`. |
// // | **Super calls** | You have to manually set up inheritance (`Object.create`, `call`, etc.). | `extends` and `super()` give you built‑in inheritance handling. |

// // ### TL;DR

// // - The `class` keyword introduces a **new, higher‑level syntax** that the engine rewrites into the same prototype‑based functions you’d write by hand.
// // - No `function` keyword appears because the class syntax *declares* the constructor and its methods for you; the engine inserts the underlying functions automatically.
// // - The resulting behavior (prototype chain, method lookup, constructor execution) is identical to the manually written prototype version, but the class form gives you stricter defaults and a clearer, more concise way to express object‑oriented patterns.

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a sound`);
//   }
// }
// console.log(Animal);

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); // calls parent constructor
//     this.breed = breed;
//   }
//   speak() {
//     console.log(`${this.name} barks`);
//   }
// }
// console.log(Dog);

// const dog = new Dog("Bruno", "Labrador");
// dog.speak(); // Bruno barks
// console.log(dog);

// function Counter() {
//   let count = 0;
//   this.increment = function () {
//     count++;
//     return count;
//   };
//   this.decrement = function () {
//     count--;
//     return count;
//   };
// }
// const c = new Counter();
// console.log(c.increment()); // 1
// console.log(c.count); // undefined (private)

// class BankAccount {
//   #balance = 0;

//   deposit(amount) {
//     this.#balance += amount;
//   }
//   getBalance() {
//     return this.#balance;
//   }
// }

// const acc = new BankAccount();
// acc.deposit(100);
// console.log(acc.getBalance()); // 100
// // console.log(acc.#balance); // ❌ Error

// console.log("Start");
// setTimeout(() => console.log("Async Task"), 0);
// console.log("End");
// // Output: Start → End → Async Task

// async function getData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.error("Error:", err);
//   }
// }
// getData();

// const err = new Error("Invalid input");
// console.log(err.name); // "Error"
// console.log(err.message); // "Invalid input"
// console.log(err.stack); // stack trace

// console.time("Loop");
// for (let i = 0; i < 1e6; i++) {}
// console.timeEnd("Loop");

// const map = new Map();
// map.set("name", "Salaam");
// console.log(map.get("name"));

// const nums = new Set([1, 2, 2, 3]);
// console.log(nums); // {1, 2, 3}

// let x = null ?? "default";
// console.log(x); // "default"
