
# 📘 **Complete JavaScript Interview Revision Plan**

Essential topics to cover for a **full-stack fresher JavaScript interview revision** (frontend + backend focus, practical + conceptual). Ordered for logical progression:

---

## 1. **JS Basics & Core Concepts**

* History and versions (ES5 → ES6+)
* Variables (`var`, `let`, `const`)
* Data types (primitive vs non-primitive)
* Type conversion (implicit, explicit)
* Operators (arithmetic, comparison, logical, ternary)
* Truthy / falsy values
* `typeof`, `==` vs `===`
* Template literals, string interpolation

---

## 2. **Control Flow**

* `if`, `else if`, `else`
* `switch`
* Loops: `for`, `while`, `do-while`
* Loop control: `break`, `continue`
* Iteration helpers: `for…of`, `for…in`

---

## 3. **Functions**

* Function declaration vs expression
* Parameters & arguments
* Return values
* Default parameters
* Arrow functions
* Function hoisting
* Pure vs impure functions
* Callback functions
* IIFE (Immediately Invoked Function Expressions)

---

## 4. **Scope & Closures**

* Global, local, block scope
* Lexical scope
* Closure definition, examples, and interview uses
* Garbage collection and memory context

---

## 5. **Objects & Arrays**

* Object literals, property access
* Methods inside objects
* `this` keyword
* Object copying (shallow vs deep)
* Array methods: `map`, `filter`, `reduce`, `forEach`, `find`, `some`, `every`
* Destructuring
* Spread and rest operators

---

## 6. **`this` & Execution Context**

* How `this` behaves (global, function, arrow function, object method)
* Call, apply, bind
* Execution context & call stack

---

## 7. **Hoisting & TDZ (Temporal Dead Zone)**

* What gets hoisted
* Difference between `var`, `let`, `const` in hoisting
* TDZ explanation

---

## 8. **Prototype & OOP in JS**

* Prototype chain
* Constructor functions
* `class` and `extends` (ES6)
* `super`, `static` methods
* Encapsulation via closures or classes

---

## 9. **Asynchronous JavaScript**

* Synchronous vs asynchronous
* Event loop, call stack, task queue, microtasks
* `setTimeout`, `setInterval`
* Callbacks and callback hell
* Promises (states, chaining, error handling)
* `async/await`
* `fetch` API & HTTP request basics
* Error handling with `try...catch`
* Practical async example (API fetch mock)

---

## 10. **DOM Manipulation (Browser-side)**

* `document.querySelector`, `getElementById`, etc.
* Event listeners and bubbling/capturing
* Form handling
* Creating, modifying, removing elements
* `innerHTML`, `textContent`, attributes
* CSS manipulation through JS

---

## 11. **Event Handling & Propagation**

* Event object
* Bubbling vs capturing
* Event delegation pattern

---

## 12. **Error Handling & Debugging**

* `try...catch...finally`
* Throwing custom errors
* Console methods and breakpoints

---

## 13. **ES6+ Features**

* Let/const
* Template literals
* Destructuring
* Default, rest, spread
* Arrow functions
* Modules (`import` / `export`)
* Optional chaining (`?.`)
* Nullish coalescing (`??`)

---

## 14. **Modules & Import/Export**

* Default vs named exports
* Practical module organization
* CommonJS vs ES Modules (Node.js vs Browser)

---

## 15. **JSON & APIs**

* `JSON.parse` and `JSON.stringify`
* Basic REST API concepts
* Fetch API example with `.then` and `async/await`
* Status codes and error handling

---

## 16. **Storage & Browser APIs**

* LocalStorage, SessionStorage, Cookies
* `window`, `navigator`
* `fetch`, `Promise.all`

---

## 17. **Advanced Topics**

* Debouncing & Throttling
* Higher-order functions
* Currying
* Deep vs shallow copy
* Immutability concept
* Polyfills (intro)
* Memoization (brief practical)

---

## 18. **JavaScript in Backend (Node.js Overview)**

* What Node.js is
* Event-driven model
* Modules and `require`
* `fs`, `http`, `path` (basics)
* npm and package.json
* Environment variables

---

## 19. **Common Interview Traps / Questions**

* Output-prediction questions (hoisting, scope, `this`)
* Promise ordering
* Event loop trick questions
* Object reference vs copy
* Shallow vs deep copy examples
* Closure interview patterns

---

## 20. **Mini-Project/Scenario Questions**

* Build a counter with closure
* Fetch API with error handling
* Debounced search input
* Chained Promises example
* Array transformations in one line

---

### 🔹 **1. JavaScript Basics & Core Concepts**

---

#### 🧩 What JavaScript Is

A **single-threaded**, **interpreted**, **dynamically typed** language used for web interactivity and backend (via Node.js).
It runs in browsers and on servers, following the **ECMAScript** standard.

---

#### 📘 Variables & Declarations

| Keyword | Scope    | Reassignable | Hoisted | TDZ (Temporal Dead Zone) | Use                        |
| ------- | -------- | ------------ | ------- | ------------------------ | -------------------------- |
| `var`   | Function | ✅ Yes        | ✅ Yes   | ❌ No                     | Legacy                     |
| `let`   | Block    | ✅ Yes        | ✅ Yes   | ✅ Yes                    | Default choice             |
| `const` | Block    | ❌ No         | ✅ Yes   | ✅ Yes                    | For constants / references |

**Example:**

```js
var a = 10;
let b = 20;
const c = 30;

// Redeclare?
var a = 15;  // ✅ allowed
// let b = 25; // ❌ error
```

**Key points:**

* `let` and `const` are block-scoped (inside `{}`)
* `var` is function-scoped
* Re-declaration allowed only with `var`

---

#### 📗 Data Types

**Primitive (copied by value):**
`string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`

**Non-Primitive (copied by reference):**
`object`, `array`, `function`, `date`, etc.

**Example:**

```js
let x = 5;              // number
let name = "Salaam";     // string
let active = true;      // boolean
let user = {id:1};      // object
let nums = [1,2,3];     // array
let nothing = null;     // object-type quirk
let notAssigned;        // undefined
```

**Interview tip:**
`typeof null` → `"object"` (historic bug in JS)
`typeof []` → `"object"`
`Array.isArray([])` → `true`

---

#### ⚙️ Type Conversion

**Implicit (Coercion):**

```js
'5' + 1   // '51' (string)
'5' - 1   // 4   (number)
true + 1  // 2
```

**Explicit:**

```js
Number("42");   // 42
String(100);    // '100'
Boolean(0);     // false
```

**Truthy / Falsy:**
Falsy values: `0`, `""`, `null`, `undefined`, `false`, `NaN`

---

#### ⚖️ Operators

* **Arithmetic:** `+ - * / % **`
* **Comparison:** `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
* **Logical:** `&&`, `||`, `!`
* **Ternary:** `condition ? trueVal : falseVal`

**Example:**

```js
let x = 5;
let result = (x > 3) ? 'yes' : 'no';  // 'yes'
```

---

#### 🔤 Template Literals

```js
let name = 'Salaam';
let msg = `Hello, ${name}!`;
console.log(msg); // Hello, Salaam!
```

Used for multi-line strings and interpolation.

---

#### 📊 Type Checking

| Expression          | Result        |
| ------------------- | ------------- |
| `typeof 42`         | `'number'`    |
| `typeof "hi"`       | `'string'`    |
| `typeof null`       | `'object'`    |
| `typeof []`         | `'object'`    |
| `Array.isArray([])` | `true`        |
| `typeof undefined`  | `'undefined'` |

---

#### 💡 Common Interview Questions

1. What is the difference between `==` and `===`?

   * `==` checks *value* after type coercion
   * `===` checks *value and type* (strict equality)

   ```js
   5 == '5'   // true
   5 === '5'  // false
   ```

2. What are truthy and falsy values?
   Values that evaluate to `true` or `false` in boolean contexts.

3. Why does `typeof null` return `"object"`?
   → Legacy bug from early JS implementation.

4. Difference between `var`, `let`, and `const`?
   Scope, hoisting behavior, and mutability.

---

#### 🧠 Mental Model

JavaScript interprets code line-by-line.
Before execution, it creates a **memory phase (creation phase)** to allocate variables/functions (this ties into hoisting later).

---

### 🔹 **2. Control Flow in JavaScript**

---

#### 🧩 Purpose

Control flow decides **how code executes** — whether sequentially, conditionally, or repeatedly.

---

### 🟦 Conditional Statements

#### **`if / else if / else`**

```js
let score = 85;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
```

* Conditions are evaluated top-down.
* First `true` condition executes, rest are skipped.

---

#### **`switch` Statement**

Used when comparing one expression to many values.
Cleaner alternative to multiple `if...else if`.

```js
let fruit = 'apple';

switch (fruit) {
  case 'apple':
    console.log('Apples are ₹100/kg');
    break;
  case 'banana':
    console.log('Bananas are ₹50/dozen');
    break;
  default:
    console.log('Fruit not available');
}
```

**Notes:**

* `break` stops further execution.
* `default` runs if no match found.
* Comparison is *strict* (`===`).

---

### 🟩 Loops (Iteration)

#### **`for` loop**

Used when you know iteration count.

```js
for (let i = 0; i < 3; i++) {
  console.log("Count:", i);
}
```

---

#### **`while` loop**

Used when count not known in advance.

```js
let i = 0;
while (i < 3) {
  console.log("i =", i);
  i++;
}
```

---

#### **`do...while` loop**

Executes body at least once.

```js
let j = 0;
do {
  console.log("j =", j);
  j++;
} while (j < 3);
```

---

### 🟨 Loop Control

#### **`break`**

Stops loop completely.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i); // 1, 2
}
```

#### **`continue`**

Skips current iteration.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // 1, 2, 4, 5
}
```

---

### 🟦 Iteration Helpers

#### **`for...of`**

Loops through **values** (arrays, strings, iterables).

```js
let arr = ['a', 'b', 'c'];
for (let val of arr) {
  console.log(val); // a b c
}
```

#### **`for...in`**

Loops through **keys/properties** (objects).

```js
let user = { name: "Salaam", age: 22 };
for (let key in user) {
  console.log(key, ":", user[key]);
}
// name : Salaam
// age : 22
```

**Avoid `for...in` on arrays** — order not guaranteed.

---

### 🧠 Common Interview Qs

1. Difference between `for...of` and `for...in`?
   → `for...of` iterates **values** (arrays/iterables).
   → `for...in` iterates **keys** (objects).

2. Why use `break` and `continue`?
   → To control iteration flow.

3. Can you modify arrays while looping?
   → Yes, but avoid — can cause skipped indices.

4. When to use `switch` over `if`?
   → When testing one variable against multiple known cases.

---

### 🧩 Visual

```
Condition → true → Execute Block → Loop / Continue  
           ↓ false  
        Skip or Exit
```

---

### 🔹 **3. Functions in JavaScript**

---

#### 🧩 Purpose

Functions group reusable logic.
They allow modular, readable, testable code.

---

### 🟦 Function Declaration

```js
function greet() {
  console.log("Hello!");
}
greet(); // Hello!
```

* Hoisted (available before definition)
* Stored in memory during creation phase

---

### 🟩 Function Expression

```js
const greet = function() {
  console.log("Hi there!");
};
greet(); // Hi there!
```

* Not hoisted
* Assigned to a variable
* Used when passing functions as data (callbacks)

---

### 🟨 Arrow Function (ES6)

Shorter syntax.
Does **not** have its own `this` or `arguments`.

```js
const add = (a, b) => a + b;
console.log(add(3, 2)); // 5
```

Equivalent to:

```js
function add(a, b) {
  return a + b;
}
```

**Use arrow functions** for simple operations or callbacks.
Avoid for object methods where `this` is needed.

---

### 🟪 Parameters & Arguments

```js
function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(5));     // 10
console.log(multiply(5, 3));  // 15
```

* Default parameter values are supported (`b = 2`).
* Extra arguments are ignored unless captured.

---

### 🟧 Returning Values

```js
function getSum(x, y) {
  return x + y;
}

let total = getSum(4, 6);
console.log(total); // 10
```

Without `return`, functions return `undefined`.

---

### 🟦 Function Hoisting

Function **declarations** are hoisted.

```js
sayHi(); // Works
function sayHi() {
  console.log("Hi!");
}
```

But function **expressions** are not:

```js
sayHi(); // ❌ Error
const sayHi = function() { console.log("Hi!"); };
```

---

### 🧠 Pure vs Impure Functions

**Pure:** Depends only on inputs, no side effects.

```js
function square(x) { return x * x; } // pure
```

**Impure:** Modifies external state.

```js
let counter = 0;
function increment() { counter++; } // impure
```

Interviewers test this for functional programming understanding.

---

### 🌀 Callback Functions

Passing a function as an argument to another.

```js
function greetUser(name, callback) {
  console.log("Hello", name);
  callback();
}

function done() {
  console.log("Login successful");
}

greetUser("Salaam", done);
```

Used in asynchronous code (e.g., API calls, event handling).

---

### ⚙️ IIFE (Immediately Invoked Function Expression)

Executes as soon as it’s defined.

```js
(function() {
  console.log("Runs instantly");
})();
```

* Used to isolate scope (before ES6 modules existed).

---

### 🧩 Rest and Spread with Functions

**Rest:** Gathers remaining args into array.

```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); // 6
```

**Spread:** Expands array elements.

```js
let arr = [1, 2, 3];
console.log(Math.max(...arr)); // 3
```

---

### 🧠 Common Interview Questions

1. Difference between declaration and expression?
   → Declaration is hoisted; expression is not.

2. What is a callback?
   → A function passed as an argument to be executed later.

3. What’s the difference between regular and arrow functions?
   → Arrow doesn’t bind its own `this` or `arguments`.

4. What is a pure function?
   → No side effects, deterministic output for same input.

5. What happens if you forget `return`?
   → Returns `undefined`.

---

### 🧩 Visual

```
Function Call → Local Scope → Execution → Return Value
```

---

### 🔹 **4. Scope & Closures**

---

#### 🧩 Scope

Scope defines where variables are **accessible**.

---

### 🟦 Types of Scope

| Type         | Description                       | Example                               |
| ------------ | --------------------------------- | ------------------------------------- |
| **Global**   | Accessible anywhere               | Declared outside functions            |
| **Function** | Accessible only inside a function | Variables with `var` inside functions |
| **Block**    | Accessible inside `{}` only       | `let` and `const`                     |

---

#### **Global Scope**

```js
let globalVar = "Accessible everywhere";
function test() {
  console.log(globalVar); // works
}
test();
```

---

#### **Function Scope**

```js
function demo() {
  var localVar = "Inside function";
  console.log(localVar); // OK
}
console.log(localVar); // ❌ Error
```

---

#### **Block Scope**

```js
{
  let a = 10;
  const b = 20;
  var c = 30;
}
console.log(c); // ✅ works
console.log(a); // ❌ error
```

`var` escapes block scope; `let` and `const` don’t.

---

### 🧭 Lexical Scope

Inner functions can access variables from their outer scope.

```js
function outer() {
  let message = "Hello";
  function inner() {
    console.log(message);
  }
  inner();
}
outer(); // Hello
```

Inner → Outer access allowed
Outer → Inner access not allowed

---

### 🧩 Closure Definition

A **closure** is formed when an inner function **remembers** variables from its lexical scope **even after the outer function has finished execution**.

---

#### **Example 1: Basic Closure**

```js
function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3
```

* `count` stays in memory because the returned function **closes over** it.
* Used in data hiding and function factories.

---

#### **Example 2: Private Variables**

```js
function createUser(name) {
  let score = 0;
  return {
    getName: () => name,
    increaseScore: () => ++score,
  };
}

const user = createUser("Salaam");
console.log(user.getName());      // Salaam
console.log(user.increaseScore()); // 1
console.log(user.increaseScore()); // 2
```

`score` is private — not directly accessible.

---

#### **Example 3: Loop with Closures (Common Trap)**

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// prints: 4, 4, 4
```

`var` leaks scope. Use `let`:

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// prints: 1, 2, 3
```

---

### 🧠 Closure Use Cases

* Data privacy (encapsulation)
* Function factories
* Event handlers
* Memoization
* Maintaining state between calls

---

### 🧱 Memory Retention Concept

Closure keeps references alive in the heap memory until no function uses them.

---

### 🧠 Common Interview Questions

1. What is a closure in JavaScript?
   → Function + its lexical environment = closure.

2. Why do closures cause memory leaks sometimes?
   → If retained variables never get dereferenced.

3. Difference between scope and closure?
   → Scope defines visibility; closure *extends* visibility beyond function lifetime.

4. How can closures be used to create private variables?
   → Return inner functions that reference private variables.

---

### 🧩 Visual

```
Outer function variables ─┐
                          ↓
Inner function keeps reference (closure)
```

---

### 🔹 **5. Objects & Arrays**

---

#### 🧩 Purpose

Objects and arrays store and organize data efficiently.
Objects store **key-value pairs**; arrays store **ordered lists**.

---

## 🟦 **Objects**

### **Creation**

```js
const user = {
  name: "Salaam",
  age: 22,
  active: true
};
```

**Access properties:**

```js
console.log(user.name);     // dot notation
console.log(user["age"]);   // bracket notation
```

---

### **Adding / Deleting / Updating**

```js
user.email = "Salaam@example.com"; // add
user.age = 23;                    // update
delete user.active;               // remove
```

---

### **Methods inside Objects**

```js
const person = {
  first: "Sheikh",
  last: "Salaam",
  fullName() {
    return this.first + " " + this.last;
  }
};
console.log(person.fullName()); // Sheikh Salaam
```

`this` refers to the current object.

---

### **Iterating through an Object**

```js
const car = { brand: "BMW", color: "black", year: 2022 };

for (let key in car) {
  console.log(key, ":", car[key]);
}
```

---

### **Object Utilities**

```js
Object.keys(car);   // ['brand', 'color', 'year']
Object.values(car); // ['BMW', 'black', 2022]
Object.entries(car);
// [['brand','BMW'], ['color','black'], ['year',2022]]
```

---

### **Copying Objects**

#### ❌ Shallow Copy (reference shared)

```js
const obj1 = { a: 1 };
const obj2 = obj1;
obj2.a = 99;
console.log(obj1.a); // 99
```

#### ✅ Deep Copy

```js
const obj1 = { a: 1 };
const obj2 = JSON.parse(JSON.stringify(obj1));
obj2.a = 99;
console.log(obj1.a); // 1
```

Or (ES6 spread):

```js
const copy = { ...obj1 };
```

---

### **Nested Object Access with Optional Chaining**

```js
const user = { profile: { address: { city: "Delhi" } } };
console.log(user.profile?.address?.city); // Delhi
console.log(user.contact?.email); // undefined (safe)
```

---

## 🟩 **Arrays**

### **Creation**

```js
const arr = [10, 20, 30];
```

### **Common Methods**

| Operation       | Method                         | Example             |
| --------------- | ------------------------------ | ------------------- |
| Add at end      | `push()`                       | `arr.push(40)`      |
| Remove last     | `pop()`                        | `arr.pop()`         |
| Add at start    | `unshift()`                    | `arr.unshift(5)`    |
| Remove first    | `shift()`                      | `arr.shift()`       |
| Slice (copy)    | `slice(start, end)`            | `arr.slice(1,3)`    |
| Splice (modify) | `splice(start, count, ...new)` | `arr.splice(1,1)`   |
| Combine         | `concat()`                     | `arr1.concat(arr2)` |
| Length          | `.length`                      | `arr.length`        |

---

### **Iteration**

```js
arr.forEach(num => console.log(num));
```

---

### **Transform Methods**

#### **`map()` – transforms each item**

```js
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2,4,6]
```

#### **`filter()` – keeps some items**

```js
const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2]
```

#### **`reduce()` – combines items**

```js
const total = nums.reduce((sum, n) => sum + n, 0);
console.log(total); // 6
```

#### **`find()` – returns first match**

```js
const val = nums.find(n => n > 1);
console.log(val); // 2
```

#### **`some()` and `every()`**

```js
nums.some(n => n > 2);   // true
nums.every(n => n > 0);  // true
```

---

### **Destructuring**

**Destructuring** is a syntax that lets you unpack values from `arrays` or properties from `objects` into distinct variables in a single, concise statement.

```js
const [a, b] = [10, 20];
console.log(a, b); // 10 20

const { name, age } = { name: "Salaam", age: 22 };
console.log(name, age); // Salaam 22
```

---

### **Spread and Rest Operators**

#### **Spread (expand)**

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1,2,3,4]
```

#### **Rest (collect)**

```js
function logAll(...args) {
  console.log(args);
}
logAll(1, 2, 3); // [1,2,3]
```

---

### **Array Copy and Merging**

```js
const original = [1, 2];
const copy = [...original];
copy.push(3);
console.log(original); // [1,2]
```

---

### **Array Sorting**

```js
let nums = [5, 1, 9];
nums.sort();         // [1, 5, 9] (string compare)
nums.sort((a,b)=>a-b); // numeric sort [1,5,9]
```

---

### 🧠 Common Interview Questions

1. Difference between shallow and deep copy?
   → Shallow shares references; deep makes full clone.

2. `map()` vs `forEach()`?
   → `map` returns a new array; `forEach` doesn’t.

3. `==` vs `===` when comparing arrays or objects?
   → Always false (different references).

4. How to merge two arrays?
   → `[...a, ...b]` or `a.concat(b)`.

5. Can you destructure nested objects?

   ```js
   const { address: { city } } = user;
   ```

---

### 🔹 **6. `this` & Execution Context**

---

#### 🧩 What is `this`?

`this` refers to the **current execution context’s owner** —
it depends on **how** a function is called, not **where** it is written.

---

## 🧭 **Execution Context Overview**

When JS runs, it creates:

1. **Global Execution Context (GEC)** – main environment (e.g., `window` in browsers, `global` in Node.js).
2. **Function Execution Context (FEC)** – created when a function is invoked.
3. Each context has:

   * **Memory (variable environment)**
   * **Thread (code execution)**

JS runs in a **single thread** — one execution context at a time (managed by a **call stack**).

---

### 🧱 Call Stack Example

```js
function a() {
  console.log('Inside A');
  b();
}

function b() {
  console.log('Inside B');
}

a();
```

**Stack flow:**

```
Global → a() → b() → return → a() done → Global done
```

---

## 🟦 `this` Keyword — 4 Major Rules

| Context                | `this` Refers To                    |
| ---------------------- | ----------------------------------- |
| Global                 | Global object (`window` / `global`) |
| Object method          | The object itself                   |
| Function (strict mode) | `undefined`                         |
| Arrow function         | `this` of its enclosing scope       |

---

### **1️⃣ Global Context**

```js
console.log(this); // Window (Browser) or Global (Node)
```

---

### **2️⃣ Inside a Function**

```js
function show() {
  console.log(this);
}
show(); // Browser: Window | Strict Mode: undefined
```

**Why:** Regular functions get their `this` from **how they’re called**, not where.

---

### **3️⃣ Inside an Object (Method Context)**

```js
const user = {
  name: "Salaam",
  show() {
    console.log(this.name);
  }
};
user.show(); // Salaam
```

Here, `this` → `user`.

---

### **4️⃣ Arrow Functions**

Arrow functions **don’t bind `this`**. They inherit it from **parent scope**.

```js
const obj = {
  name: "Salaam",
  arrow: () => console.log(this.name),
  normal() { console.log(this.name); }
};

obj.arrow();  // undefined
obj.normal(); // Salaam
```

**Reason:** `arrow` gets `this` from global scope, not `obj`.

---

### 🧩 `this` in Nested Functions

```js
const person = {
  name: "Salaam",
  greet() {
    function inner() {
      console.log(this.name);
    }
    inner(); // undefined
  }
};
person.greet();
```

✅ Fix 1: Arrow Function

```js
const person = {
  name: "Salaam",
  greet() {
    const inner = () => console.log(this.name);
    inner();
  }
};
person.greet(); // Salaam
```

✅ Fix 2: Save Reference

```js
const person = {
  name: "Salaam",
  greet() {
    const self = this;
    function inner() {
      console.log(self.name);
    }
    inner();
  }
};
person.greet(); // Salaam
```

---

## ⚙️ Function Binding Methods

### **call()**

Calls a function with a specific `this` and arguments.

```js
function greet() {
  console.log(`Hello, ${this.name}`);
}
const user = { name: "Salaam" };
greet.call(user); // Hello, Salaam
```

---

### **apply()**

Same as `call`, but takes arguments as an array.

```js
function intro(lang1, lang2) {
  console.log(`${this.name} knows ${lang1} and ${lang2}`);
}
const dev = { name: "Sheikh" };
intro.apply(dev, ["JS", "C#"]);
```

---

### **bind()**

Returns a new function with `this` permanently set.

```js
const user = { name: "Salaam" };
function greet() { console.log(this.name); }

const bound = greet.bind(user);
bound(); // Salaam
```

Used to **preserve context** in callbacks.

---

### 🧠 Common Interview Qs

1. What is `this` in JavaScript?
   → The context object at function call time.

2. Difference between arrow and regular function `this`?
   → Arrow inherits parent’s `this`; regular binds its own.

3. Difference between `call`, `apply`, and `bind`?

   * `call`: invoke immediately, args listed
   * `apply`: invoke immediately, args array
   * `bind`: returns new function to call later

4. Why does `this` behave differently in strict mode?
   → In strict mode, it’s `undefined` instead of `window`.

5. What happens if you use `this` inside a nested regular function?
   → Loses reference; points to global or undefined.

---

### 🧩 Visual

```
this → depends on CALLING CONTEXT, not DECLARATION SITE
```

---

### 🔹 **7. Hoisting & Temporal Dead Zone (TDZ)**

---

#### 🧩 Concept

Before JavaScript executes code line by line, it performs a **memory creation phase** where:

* Variable and function declarations are stored in memory.
* This is known as **hoisting**.

> Hoisting means “moving declarations to the top of their scope (conceptually)” — not physically.

---

## 🟦 Function Hoisting

```js
sayHi(); // ✅ Works
function sayHi() {
  console.log("Hello!");
}
```

**Explanation:**
Function declarations are hoisted **with** their definitions.
The function is available anywhere in its scope before its definition.

---

## 🟩 Variable Hoisting (with `var`)

```js
console.log(x); // undefined (not error)
var x = 10;
```

Behind the scenes:

```js
var x;        // hoisted
console.log(x);
x = 10;
```

**Note:**

* Only the declaration is hoisted, not the initialization.
* Default value is `undefined`.

---

## 🟨 Hoisting with `let` and `const`

```js
console.log(a); // ❌ ReferenceError
let a = 5;
```

`let` and `const` are **hoisted** but **not initialized**.
They are in the **Temporal Dead Zone (TDZ)** — the time between entering scope and actual initialization.

---

### 🧩 Temporal Dead Zone (TDZ)

**TDZ** is the zone where a variable exists in memory but **cannot be accessed**.

Example:

```js
{
  console.log(x); // ❌ Error
  let x = 10;
}
```

The TDZ starts when the block is entered and ends when the variable is initialized.

---

### ⚙️ Const vs Let in TDZ

* Both are hoisted and live in TDZ.
* Difference: `const` must be **initialized at declaration**.

```js
const pi = 3.14; // ✅ must assign immediately
```

---

## 🧭 Hoisting Order

1. Function declarations
2. Variable declarations (`var`)
3. `let` / `const` (in TDZ)

Example:

```js
greet(); // Works
console.log(a); // undefined
console.log(b); // ReferenceError

function greet() { console.log("Hi"); }
var a = 1;
let b = 2;
```

---

## 🧠 Common Interview Questions

1. **What is hoisting?**
   → JS behavior of moving declarations to top of their scope before execution.

2. **Are `let` and `const` hoisted?**
   → Yes, but kept uninitialized in TDZ until declared.

3. **Why is accessing a `let` variable before declaration an error?**
   → Because of TDZ.

4. **Which is hoisted first: function or variable?**
   → Function declarations.

5. **Difference between `undefined` and `ReferenceError`?**

   * `undefined`: variable declared but not assigned.
   * `ReferenceError`: variable not yet in accessible scope (TDZ or undeclared).

---

### 🧩 Visual Summary

```
Memory Phase:
function greet() {...}
var a = undefined
let b (in TDZ)
const c (in TDZ)
---------------------
Execution Phase:
Actual code runs top → bottom
```

---

### 🔹 **8. Prototype & OOP in JavaScript**

---

#### 🧩 Concept

JavaScript uses **prototype-based inheritance**, not classical class-based inheritance like Java or C#.
Objects can inherit directly from other objects via an internal link called `[[Prototype]]`.

---

## 🟦 Object Prototype

Every object in JS has an internal property `[[Prototype]]` (accessible via `. __proto__` or `Object.getPrototypeOf()`).

Example:

```js
const user = { name: "Salaam" };
console.log(user.__proto__ === Object.prototype); // true
```

All plain objects inherit methods like `toString()`, `hasOwnProperty()` from `Object.prototype`.

---

### 🧩 Prototype Chain

If JS doesn’t find a property on the object, it looks up the prototype chain until it reaches `null`.

```js
const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats); // true (inherited)
console.log(dog.hasOwnProperty('eats')); // false
```

**Lookup path:**

```
dog → animal → Object.prototype → null
```

---

## 🟩 Constructor Functions

Before `class` syntax, constructors were used for creating multiple similar objects.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const user1 = new Person("Salaam", 22);
user1.greet(); // Hi, I'm Salaam
```

**Explanation:**

* `new` creates a new object.
* Links it to `Person.prototype`.
* Executes `Person()` to assign properties.

---

## 🟨 Prototype Inheritance Example

```js
function Employee(name, role) {
  this.name = name;
  this.role = role;
}
Employee.prototype.describe = function() {
  console.log(`${this.name} works as ${this.role}`);
};

const emp = new Employee("Sheikh", "Developer");
emp.describe();
```

---

## 🟪 ES6 `class` Syntax (syntactic sugar)

`class` is cleaner syntax built on top of prototypes.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const user = new Person("Salaam", 22);
user.greet(); // Hello, I'm Salaam
```

**Key Points:**

* Classes are **not hoisted**.
* Methods defined inside class automatically go to prototype.
* `constructor()` runs when a new instance is created.

---

## 🧩 Inheritance with `extends` and `super`

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls parent constructor
    this.breed = breed;
  }
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Bruno", "Labrador");
dog.speak(); // Bruno barks
```

---

## 🧱 `super` Keyword

* Used to call parent methods or constructors.
* Must call `super()` before using `this` in subclass constructors.

---

## 🟦 Static Methods

Methods that belong to the **class itself**, not instances.

```js
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtil.add(2, 3)); // 5
```

Cannot call static methods from instance (`obj.add()` → ❌).

---

## 🧩 Encapsulation using Closures

JavaScript doesn’t have private members by default (older syntax), but closures can simulate them.

```js
function Counter() {
  let count = 0;
  this.increment = function() { count++; return count; };
  this.decrement = function() { count--; return count; };
}
const c = new Counter();
console.log(c.increment()); // 1
console.log(c.count); // undefined (private)
```

---

## 🟫 Private Fields (ES2022+)

You can now define private class members using `#`.

```js
class BankAccount {
  #balance = 0;

  deposit(amount) { this.#balance += amount; }
  getBalance() { return this.#balance; }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
// console.log(acc.#balance); // ❌ Error
```

---

## 🧠 Common Interview Questions

1. **What is the prototype chain?**
   → Mechanism for inheritance — object looks up properties in its prototype hierarchy.

2. **Difference between class-based and prototype-based OOP?**
   → Classes are blueprints (syntactic sugar); prototypes are actual underlying inheritance links.

3. **What does the `new` keyword do?**
   → Creates a new object, links its prototype, binds `this`, and returns the object.

4. **Difference between static and instance methods?**
   → Static methods belong to class; instance methods to objects.

5. **Can you achieve encapsulation in JS?**
   → Yes, using closures or private fields (`#`).

---

### 🧩 Visual Summary

```
object → prototype → prototype → null
class → built on prototype chain
```

---

### 🔹 **9. Asynchronous JavaScript**

---

#### 🧩 Why Asynchronous?

JavaScript runs **single-threaded**, so one operation can block the rest.
To avoid freezing the UI or delaying responses, JS uses **asynchronous programming** for non-blocking operations like:

* API calls
* Timers
* File or DB operations
* User interactions

---

## 🟦 Synchronous vs Asynchronous

| Type             | Behavior                                                 | Example                         |
| ---------------- | -------------------------------------------------------- | ------------------------------- |
| **Synchronous**  | Executes line by line, waits for each to finish          | Regular function calls          |
| **Asynchronous** | Doesn’t block, continues execution, handles result later | `setTimeout`, `fetch`, Promises |

```js
console.log("Start");
setTimeout(() => console.log("Async Task"), 0);
console.log("End");
// Output: Start → End → Async Task
```

---

## ⚙️ Event Loop Model (Simplified)

1. JS runs in one thread.
2. **Call Stack** → executes main code.
3. **Web APIs** → handle async tasks (timers, fetch, etc.).
4. **Callback Queue / Microtask Queue** → hold async results.
5. **Event Loop** → pushes queued tasks back to stack when it's empty.

🧩 Visual order:

```
Call Stack → Web APIs → Callback Queue → Event Loop → Stack
```

---

## 🕒 `setTimeout` and `setInterval`

```js
setTimeout(() => console.log("Run once after 2s"), 2000);
const id = setInterval(() => console.log("Runs every 1s"), 1000);
clearInterval(id); // to stop
```

---

## 🧱 Callback Functions

A function passed into another to run later.

```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 2000);
}

fetchData(result => console.log(result)); // Data loaded (after 2s)
```

**Problem:** nested callbacks → **Callback Hell**:

```js
getUser(() => {
  getPosts(() => {
    getComments(() => {
      console.log("Done");
    });
  });
});
```

---

## 🟩 Promises

Promises simplify async code and make it more readable.

```js
const promise = new Promise((resolve, reject) => {
  let success = true;
  success ? resolve("Success!") : reject("Error!");
});

promise
  .then(msg => console.log(msg))     // Success!
  .catch(err => console.error(err))
  .finally(() => console.log("Done"));
```

**Promise States:**

1. *Pending*
2. *Fulfilled (resolved)*
3. *Rejected*

---

### 🧩 Chaining Promises

```js
fetchUser()
  .then(user => fetchPosts(user.id))
  .then(posts => fetchComments(posts[0].id))
  .catch(err => console.error(err));
```

Each `.then()` returns a new promise — enabling chaining.

---

## 🟨 `async / await` (ES8)

Simplifies promise-based code into sequential style.

```js
async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data.title);
  } catch (err) {
    console.error("Error:", err);
  }
}
getData();
```

**Notes:**

* `await` pauses function until promise resolves.
* Only valid inside `async` functions.

* `json()`: Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.
`Return value`of `json()`: A Promise that resolves to a JavaScript object. This object could be anything that can be represented by JSON — an object, an array, a string, a number…

---

## 🧩 Parallel Promises with `Promise.all`

```js
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");

Promise.all([p1, p2]).then(values => console.log(values)); // ["A","B"]
```

If one fails → all rejected.

Other variants:

* `Promise.allSettled()` → waits for all (fulfilled or rejected)
* `Promise.race()` → first to settle
* `Promise.any()` → first to *fulfill* (ignores rejects)

---

## 🧠 Common Interview Questions

1. **What is the event loop?**
   → Mechanism managing execution of sync + async tasks using call stack and queues.

2. **Difference between callback, promise, and async/await?**
   → Increasingly cleaner abstractions to handle async code.

3. **Why does JS need async behavior if it’s single-threaded?**
   → To avoid blocking the main thread (non-blocking IO).

4. **What happens if you forget `await`?**
   → Returns a pending promise instead of resolved value.

5. **When to use `Promise.all`?**
   → To execute multiple promises in parallel and wait for all results.

---

### 🧩 Visual Summary

```
Code executes → async task sent to Web API → callback queued → event loop picks it up → executes
```

---

### 🔹 **10. DOM Manipulation (Browser-side)**

---

#### 🧩 Concept

**DOM (Document Object Model)** is the browser’s structured representation of HTML.
JavaScript interacts with it to **read**, **modify**, and **listen** to webpage content dynamically.

---

## 🟦 Accessing DOM Elements

| Method                              | Description                | Example                                   |
| ----------------------------------- | -------------------------- | ----------------------------------------- |
| `document.getElementById()`         | Select by ID               | `document.getElementById('title')`        |
| `document.getElementsByClassName()` | Select all by class        | `document.getElementsByClassName('item')` |
| `document.getElementsByTagName()`   | Select all by tag          | `document.getElementsByTagName('p')`      |
| `document.querySelector()`          | First match (CSS selector) | `document.querySelector('.btn')`          |
| `document.querySelectorAll()`       | All matches                | `document.querySelectorAll('div.box')`    |

```html
<h2 id="title">Hello</h2>
<div class = "box" >Select Me!!</div>
<div class = "box" >Select Me 2!!</div>
<div class = "box" >Select Me 3!!</div>
<script>
  const title = document.getElementById("title");
  console.log(title.textContent); // Hello
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    console.log(box.textContent);
  });
</script>
```

---

## 🟩 Reading & Changing Content

| Property       | Purpose             | Example                             |
| -------------- | ------------------- | ----------------------------------- |
| `.textContent` | Only text           | `title.textContent = 'Hi';`         |
| `.innerHTML`   | HTML inside element | `div.innerHTML = '<b>Updated</b>';` |
| `.value`       | For form inputs     | `input.value = 'Salaam';`            |

---

## 🟨 Modifying Attributes

```js
const img = document.querySelector('img');
img.setAttribute('src', 'logo.png');
img.getAttribute('alt'); // read
img.removeAttribute('alt');
```

---

## 🟪 Modifying CSS

```js
const box = document.querySelector('.box');
box.style.backgroundColor = 'skyblue';
box.style.padding = '10px';
```

Or toggle classes dynamically:

```js
box.classList.add('active');
box.classList.remove('hidden');
box.classList.toggle('highlight');
```

**`classList` property**:
>Provides a read-only `DOMTokenList` representing the class attribute of an element.

---

## 🧱 Creating & Appending Elements

```js
const li = document.createElement('li');
li.textContent = 'New item';

document.querySelector('ul').appendChild(li);
```

**Alternatives:**

* `append()` → can add text or elements
* `prepend()` → adds at start
* `remove()` → deletes element

```js
li.remove(); // removes element
```

---

## 🧩 Traversing the DOM

| Property                                         | Description                      |
| ------------------------------------------------ | -------------------------------- |
| `.parentElement`                                 | Direct parent                    |
| `.children`                                      | HTMLCollection of child elements |
| `.firstElementChild`, `.lastElementChild`        | First / last child               |
| `.nextElementSibling`, `.previousElementSibling` | Neighbors                        |

```js
const list = document.querySelector('ul');
console.log(list.firstElementChild.textContent);
```

---

## 🟦 Event Handling

Attach event listeners to respond to user actions.

```js
const btn = document.querySelector('#clickMe');
btn.addEventListener('click', () => {
  console.log('Button clicked');
});
```

**Common events:**
`click`, `input`, `submit`, `change`, `mouseover`, `keydown`

---

### 🧩 Example: Form Handling

```html
<form id="login">
  <input id="username" placeholder="Name">
  <button>Submit</button>
</form>

<script>
document.getElementById('login').addEventListener('submit', e => {
  e.preventDefault(); // stop page reload
  const name = document.getElementById('username').value;
  console.log(`Welcome ${name}`);
});
</script>
```

---

## 🟨 Event Propagation (Preview)

1. **Capturing phase:** Top → Target
2. **Bubbling phase:** Target → Top

```js
div.addEventListener('click', handler, true);  // Capturing
div.addEventListener('click', handler, false); // Bubbling (default)
```

Will expand in next topic.

---

## 🧠 Common Interview Questions

1. **Difference between `innerHTML` and `textContent`?**
   → `innerHTML` parses HTML; `textContent` only text.

2. **What’s `event.preventDefault()`?**
   → Stops default browser action (like form reload).

3. **Difference between `.append()` and `.appendChild()`?**
   → `.append()` can take text or multiple nodes; `.appendChild()` only one node.

4. **How to add or remove classes dynamically?**
   → Use `.classList.add()`, `.remove()`, `.toggle()`.

5. **Why use `querySelector` over older methods?**
   → Supports CSS-style selectors, simpler syntax.

---

### 🧩 Visual Flow

```
HTML → DOM Tree → JS selects → modifies → re-renders
```

---

### 🔹 **11. Event Handling & Propagation**

---

#### 🧩 Purpose

Events let JavaScript respond to **user actions** (click, input, key press, scroll, etc.)
Event propagation defines **how** and **in what order** those events move through the DOM tree.

---

## 🟦 Adding Event Listeners

```js
const btn = document.querySelector('#clickBtn');

btn.addEventListener('click', () => {
  console.log('Button clicked');
});
```

**Syntax:**
`element.addEventListener(eventType, handler, useCapture)`

* `eventType`: e.g. `'click'`, `'input'`, `'keydown'`
* `handler`: function to run
* `useCapture`: optional boolean (`false` = bubbling phase, default)

---

### 🧩 Removing Event Listeners

```js
function logClick() {
  console.log('Clicked!');
}
btn.addEventListener('click', logClick);

// Remove later
btn.removeEventListener('click', logClick);
```

The reference must be the **same function** used for removal.

---

## 🟩 Event Object

When an event occurs, JS automatically passes an **event object** to the handler.

```js
btn.addEventListener('click', function (e) {
  console.log(e.type);    // "click"
  console.log(e.target);  // element clicked
});
```

**Useful properties:**

| Property              | Description                       |
| --------------------- | --------------------------------- |
| `e.type`              | Event type                        |
| `e.target`            | Actual element clicked            |
| `e.currentTarget`     | Element where handler is attached |
| `e.preventDefault()`  | Stops default behavior            |
| `e.stopPropagation()` | Stops bubbling further            |

---

## 🟨 Event Propagation Phases

1. **Capturing phase:** Event travels *top → target*
2. **Target phase:** Event reaches the element clicked
3. **Bubbling phase:** Event bubbles *target → top*

Default is **bubbling**.

```html
<div id="outer">
  <button id="inner">Click</button>
</div>
```

```js
document.getElementById('outer').addEventListener('click', () => {
  console.log('Outer div clicked');
});

document.getElementById('inner').addEventListener('click', () => {
  console.log('Button clicked');
});
```

**Click output:**

```
Button clicked
Outer div clicked
```

(Bubbling phase)

---

### 🧩 Capturing Example

```js
document.getElementById('outer').addEventListener(
  'click',
  () => console.log('Outer capturing'),
  true // capture phase
);
```

**Output on button click:**

```
Outer capturing
Button clicked
Outer div clicked
```

---

## 🧱 Stopping Propagation

```js
document.getElementById('inner').addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Button only');
});
```

Prevents outer handlers from running.

---

## 🟦 Event Delegation (Important)

Attach one listener to a **parent** instead of multiple children.
Efficient for dynamically created elements.

```html
<ul id="list">
  <li>One</li>
  <li>Two</li>
</ul>
```

```js
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log('Clicked:', e.target.textContent);
  }
});
```

Even new `<li>` items added later will be handled automatically.

---

## 🟩 Keyboard and Input Events

```js
document.addEventListener('keydown', e => {
  console.log(`Key: ${e.key}, Code: ${e.code}`);
});

document.querySelector('#name').addEventListener('input', e => {
  console.log('Value:', e.target.value);
});
```

---

## 🧠 Common Interview Questions

1. **Difference between event bubbling and capturing?**
   → Bubbling: child → parent.
   → Capturing: parent → child.

2. **How to stop an event from propagating further?**
   → `event.stopPropagation()`

3. **How to prevent default action (like form submission)?**
   → `event.preventDefault()`

4. **What is event delegation and why use it?**
   → Attach one handler to a parent to handle all children — efficient for dynamic DOMs.

5. **Difference between `target` and `currentTarget`?**

   * `target`: element that triggered event.
   * `currentTarget`: element that has listener attached.

---

### 🔹 **12. Error Handling & Debugging**

---

#### 🧩 Concept

Error handling ensures that your code **fails safely** without breaking execution.
Debugging helps identify and fix issues efficiently.

---

## 🟦 Types of Errors in JavaScript

| Type                | Example                          | Cause                           |
| ------------------- | -------------------------------- | ------------------------------- |
| **Syntax Error**    | `if (true {`                     | Invalid code syntax             |
| **Reference Error** | `console.log(x)` (x not defined) | Accessing undeclared variable   |
| **Type Error**      | `null.toUpperCase()`             | Invalid operation on wrong type |
| **Range Error**     | `(12345).toFixed(100)`           | Value out of range              |
| **URI Error**       | `decodeURI('%')`                 | Invalid URI format              |

---

## 🟩 Handling Errors with `try...catch`

```js
try {
  const data = JSON.parse('{ invalid json }');
} catch (error) {
  console.log("Caught error:", error.message);
}
```

If an error occurs inside `try`, control jumps to `catch`.
Execution continues after `catch`.

---

### **Optional `finally`**

Executes regardless of success or failure.

```js
try {
  console.log("Start");
  throw new Error("Something went wrong");
} catch (err) {
  console.error("Error:", err.message);
} finally {
  console.log("End");
}
```

Output:

```
Start
Error: Something went wrong
End
```

---

## 🧱 Custom Error Throwing

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.error(err.message);
}
```

**Use `throw`** to create controlled failures.

---

## 🟨 Using `Error` Object

```js
const err = new Error("Invalid input");
console.log(err.name);    // "Error"
console.log(err.message); // "Invalid input"
console.log(err.stack);   // stack trace
```

---

## 🟪 Async Error Handling (Promises & async/await)

### **In Promises**

```js
fetchData()
  .then(res => console.log(res))
  .catch(err => console.error("Promise Error:", err));
```

### **In async/await**

```js
async function getData() {
  try {
    const res = await fetch("invalid-url");
  } catch (err) {
    console.error("Async Error:", err.message);
  }
}
getData();
```

---

## 🧭 Debugging Tools & Techniques

### **1. `console` Methods**

| Method                                 | Usage        |
| -------------------------------------- | ------------ |
| `console.log()`                        | General info |
| `console.error()`                      | Errors       |
| `console.warn()`                       | Warnings     |
| `console.table()`                      | Tabular data |
| `console.time()` / `console.timeEnd()` | Measure time |
| `console.trace()`                      | Stack trace  |

Example:

```js
console.time("Loop");
for (let i = 0; i < 1e6; i++) {}
console.timeEnd("Loop");
```

---

### **2. Browser DevTools**

* Press **F12** → Console tab for errors/logs.
* Use **breakpoints** in “Sources” tab.
* Inspect variable states with Watch expressions.
* Step through code execution line by line.

---

### **3. Debugger Keyword**

Pauses execution at that point (like a manual breakpoint).

```js
function test(x) {
  debugger; // code pauses here
  console.log(x * 2);
}
test(10);
```

---

## 🧩 Defensive Coding

Prevent errors using safe checks:

```js
if (user && user.address && user.address.city) { ... }
// Better:
console.log(user?.address?.city); // optional chaining
```

---

## 🧠 Common Interview Questions

1. **What is the purpose of `try...catch`?**
   → To handle runtime errors gracefully.

2. **Difference between syntax and runtime error?**
   → Syntax: before execution. Runtime: during execution.

3. **What does `throw` do?**
   → Manually triggers an error to be caught by `catch`.

4. **How do you handle async errors?**
   → Use `.catch()` for Promises or `try...catch` in `async/await`.

5. **What is `finally` used for?**
   → Code that must run regardless of outcome (cleanup, closing connections, etc.).

---

### 🧩 Visual Flow

```
try → success → skip catch → run finally
try → error → go to catch → run finally
```

---

### 🔹 **13. ES6+ Features (Modern JavaScript)**

---

#### 🧩 Concept

ES6 (ECMAScript 2015) introduced major updates that modernized JavaScript.
Later versions (ES7–ES13) added smaller, useful improvements.
These are common in **interview coding rounds** and **production projects**.

---

## 🟦 1. `let` and `const`

Replaces `var`.

```js
let a = 10;
const b = 20;
```

| Keyword | Scope    | Redeclare | Reassign |
| ------- | -------- | --------- | -------- |
| `var`   | Function | ✅         | ✅        |
| `let`   | Block    | ❌         | ✅        |
| `const` | Block    | ❌         | ❌        |

---

## 🟩 2. Template Literals

String interpolation and multiline strings.

```js
let name = "Salaam";
console.log(`Hello ${name}, welcome!`);
```

---

## 🟨 3. Arrow Functions

Compact syntax.
They **don’t bind `this`** or `arguments`.

```js
const sum = (a, b) => a + b;
const greet = name => `Hi ${name}`;
```

---

## 🟪 4. Destructuring

### **Arrays**

```js
const [x, y] = [10, 20];
```

### **Objects**

```js
const { name, age } = { name: "Salaam", age: 22 };
```

### **Nested Destructuring**

```js
const user = { info: { city: "Delhi" } };
const { info: { city } } = user;
```

---

## 🟫 5. Spread and Rest Operators

### **Spread** — expands

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
```

### **Rest** — collects

```js
function total(...nums) {
  return nums.reduce((a, b) => a + b);
}
```

---

## 🟧 6. Default Parameters

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest
```

---

## 🟦 7. Enhanced Object Literals

Shorthand property and method definitions.

```js
let name = "Salaam", age = 22;
const user = {
  name, age, greet() { console.log("Hi!"); }
};
```

---

## 🟩 8. Modules (`import` / `export`)

Organize code into separate files.

**math.js**

```js
export const add = (a, b) => a + b;
export default function square(n) { return n * n; }
```

**main.js**

```js
import square, { add } from './math.js';
console.log(add(2,3), square(4));
```

---

## 🟨 9. Classes (syntactic sugar for prototypes)

```js
class Person {
  constructor(name) { this.name = name; }
  greet() { console.log(`Hello, ${this.name}`); }
}
```

---

## 🟪 10. Promises & Async/Await (recap)

```js
const fetchData = () => new Promise(resolve => setTimeout(() => resolve("Done"), 1000));
async function run() {
  const result = await fetchData();
  console.log(result);
}
```

---

## 🟫 11. Iterables & `for...of`

```js
const arr = [10, 20, 30];
for (let val of arr) console.log(val);
```

---

## 🟧 12. Map and Set

### **Map**

Stores key–value pairs (any type key).

```js
const map = new Map();
map.set("name", "Salaam");
console.log(map.get("name"));
```

### **Set**

Stores **unique values**.

```js
const nums = new Set([1, 2, 2, 3]);
console.log(nums); // {1, 2, 3}
```

---

## 🟦 13. Optional Chaining `?.`

Safely access nested properties.

```js
console.log(user.address?.city);
```

---

## 🟩 14. Nullish Coalescing `??`

Returns right value only if left is `null` or `undefined`.

```js
let x = null ?? "default";
console.log(x); // "default"
```

---

## 🟨 15. Object Methods: `Object.assign`, `Object.entries`, etc

```js
const user = { a: 1, b: 2 };
console.log(Object.entries(user)); // [['a',1],['b',2]]
```

---

## 🟪 16. String & Array Improvements

```js
"hello".includes("he"); // true
[1, 2, 3].includes(2);  // true
[1, 2, 3].find(n => n > 1); // 2
```

---

## 🟫 17. ES2020+ Additions

| Feature                          | Example                           |   |       |
| -------------------------------- | --------------------------------- | - | ----- |
| **Optional chaining**            | `user?.address?.city`             |   |       |
| **Nullish coalescing**           | `a ?? b`                          |   |       |
| **BigInt**                       | `123n`                            |   |       |
| **Promise.allSettled()**         | Waits for all promises            |   |       |
| **Logical assignment operators** | `a                                |   | = 10` |
| **Array `flat()` / `flatMap()`** | `[1,[2,[3]]].flat(2)` → `[1,2,3]` |   |       |

---

## 🧠 Common Interview Questions

1. **What are ES6 features you’ve used?**
   → `let/const`, arrow functions, destructuring, spread, promises, classes, modules.

2. **Difference between `==` and `===`?**
   → `===` checks type + value (strict).

3. **Difference between rest and spread operators?**
   → Rest collects → `function(...args)`; Spread expands → `[...arr]`.

4. **Why use arrow functions?**
   → Simpler syntax and lexical `this`.

5. **What is the use of `??` operator?**
   → Provide default values when `null` or `undefined`.

---

### 🧩 Visual Summary

```
Pre-ES6: var, functions, callbacks
ES6+: let/const, classes, promises, async/await, modules
```

---

### 🔹 **14. Modules & Import/Export (in-depth)**

---

#### 🧩 Concept

Modules help split JavaScript into **reusable, maintainable files**.
Each module has its own **scope** — variables inside one module aren’t visible in others unless exported.
ES6 introduced **`import` / `export`** for native module support.

---

## 🟦 Module Basics

A JavaScript file becomes a **module** when it uses `export` or `import`.

**Example directory:**

```
/project
 ┣ index.html
 ┣ main.js
 ┗ utils.js
```

`index.html`:

```html
<script type="module" src="main.js"></script>
```

---

## 🟩 Exporting from a Module

### **1. Named Exports**

Export multiple things (must use exact names when importing).

```js
// utils.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```

**Import:**

```js
// main.js
import { add, multiply } from './utils.js';
console.log(add(2, 3), multiply(3, 4));
```

You can also **rename**:

```js
import { add as sum } from './utils.js';
```

---

### **2. Default Exports**

Each module can have **only one default export**.

```js
// utils.js
export default function greet(name) {
  console.log(`Hello, ${name}`);
}
```

**Import:**

```js
import greet from './utils.js';
greet("Salaam");
```

You can rename freely since it’s default.

---

### **3. Combined Exports**

```js
const PI = 3.14;
function area(r) { return PI * r * r; }

export { PI, area };
export default function square(x) { return x * x; }
```

---

## 🟨 Re-exporting (Export from another module)

Used to build central “index” files.

```js
// math.js
export { add, subtract } from './operations.js';
```

Now you can import everything from `math.js` instead.

---

## 🟪 Import All

```js
import * as MathUtils from './utils.js';
console.log(MathUtils.add(2, 3));
```

All exports grouped into one namespace object.

---

## 🧱 Import Side Effects Only

Sometimes you import a file just to run it (e.g., polyfills).

```js
import './setup.js';
```

---

## 🟩 Dynamic Imports (ES2020+)

Load modules **on demand** (returns a Promise).

```js
async function loadMath() {
  const math = await import('./math.js');
  console.log(math.add(2, 3));
}
loadMath();
```

Useful for lazy-loading large modules or features.

---

## 🟧 Module Scope & Behavior

* Variables are **scoped** to the module, not global.
* Modules are **loaded once** (cached).
* Imports are **static** — resolved at compile time.
* Always use **relative or absolute paths** (`'./file.js'`).

---

## 🟦 CommonJS vs ES Modules

| Feature  | CommonJS (Node.js old)      | ES Modules (modern JS)     |
| -------- | --------------------------- | -------------------------- |
| Syntax   | `require`, `module.exports` | `import`, `export`         |
| Loading  | Runtime (synchronous)       | Static (compile-time)      |
| Scope    | Shared                      | Scoped                     |
| Use Case | Node.js (pre-ES6)           | Browser + Node.js (modern) |

**Example:**

```js
// CommonJS
const fs = require('fs');
module.exports = myFunc;

// ES Modules
import fs from 'fs';
export default myFunc;
```

---

## 🧩 Example Integration

**math.js**

```js
export const add = (a, b) => a + b;
export default function square(n) { return n * n; }
```

**main.js**

```js
import square, { add } from './math.js';

console.log(add(2, 3));   // 5
console.log(square(4));   // 16
```

**index.html**

```html
<script type="module" src="main.js"></script>
```

---

## 🧠 Common Interview Questions

1. **Difference between default and named exports?**
   → Default: one per module, import with any name.
   → Named: multiple exports, must use same name (or alias).

2. **Why use modules?**
   → Code reuse, maintainability, scope isolation, lazy loading.

3. **Can a file have both default and named exports?**
   → Yes.

4. **What is dynamic import and when to use it?**
   → `import()` loads modules at runtime — used for performance or conditional loading.

5. **Are ES modules synchronous or asynchronous?**
   → Asynchronous (they use deferred execution).

---

### 🧩 Visual Summary

```
utils.js  →  export
main.js   →  import
index.html →  <script type="module">
```

---

### 🔹 **15. JSON & APIs**

---

#### 🧩 Concept

**JSON (JavaScript Object Notation)** is the universal data format used for communication between client and server.
**APIs (Application Programming Interfaces)** allow applications to **request** or **send** data using that format — typically through HTTP.

---

## 🟦 JSON Basics

### **Structure**

* Data in key-value pairs
* Keys are **strings**
* Values can be strings, numbers, booleans, arrays, or objects
* No functions or undefined

```json
{
  "name": "Salaam",
  "age": 22,
  "skills": ["JavaScript", "C#"],
  "active": true
}
```

---

### **Convert Between JS & JSON**

```js
const user = { name: "Salaam", age: 22 };

// Object → JSON
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Salaam","age":22}'

// JSON → Object
const parsed = JSON.parse(jsonString);
console.log(parsed.name); // Salaam
```

⚠️ **JSON.stringify()**

* Skips `undefined`, `functions`, and `symbols`.
* Converts Dates to strings.

---

## 🟩 Fetch API (Modern HTTP Requests)

`fetch()` is used to **get**, **post**, **update**, or **delete** data from APIs asynchronously.

### **GET Request**

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error('Error:', err));
```

**Explanation:**

1. `fetch()` returns a **Promise**.
2. `.json()` also returns a Promise that resolves parsed data.
3. `.then()` handles success, `.catch()` handles errors.

---

### **POST Request**

Send data to server.

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'JS Revision',
    body: 'Learning Fetch API',
    userId: 1
  })
})
.then(res => res.json())
.then(data => console.log('Created:', data))
.catch(err => console.error(err));
```

---

### **PUT and DELETE**

```js
// Update (PUT)
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Updated title' })
});

// Delete
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
});
```

---

## 🟨 Using `async / await` with Fetch

```js
async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    console.log(data.name);
  } catch (err) {
    console.error('Error:', err);
  }
}
getUser();
```

Cleaner and easier than promise chaining.

---

## 🟪 Handling API Errors

```js
async function fetchData() {
  try {
    const res = await fetch('https://api.invalid-url.com');
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    const data = await res.json();
  } catch (err) {
    console.error('Network/Server issue:', err.message);
  }
}
```

✅ Always check `res.ok` for HTTP 2xx status.

---

## 🧱 Common API Status Codes

| Code    | Meaning      |
| ------- | ------------ |
| **200** | OK (success) |
| **201** | Created      |
| **400** | Bad Request  |
| **401** | Unauthorized |
| **403** | Forbidden    |
| **404** | Not Found    |
| **500** | Server Error |

---

## 🟧 Practical Use Case Example

```js
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

async function loadTodos() {
  const res = await fetch(apiUrl);
  const todos = await res.json();
  
  const ul = document.createElement('ul');
  todos.slice(0, 5).forEach(todo => {
    const li = document.createElement('li');
    li.textContent = `${todo.id}. ${todo.title}`;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
}
loadTodos();
```

**Demonstrates:** Fetch + DOM + async/await + JSON parsing.

---

## 🟫 Local Storage with JSON

Store fetched data persistently.

```js
localStorage.setItem('user', JSON.stringify({ name: 'Salaam' }));
const user = JSON.parse(localStorage.getItem('user'));
console.log(user.name);
```

---

## 🧠 Common Interview Questions

1. **Difference between JSON and JavaScript object?**
   → JSON is a string format; JS object is in-memory structure.

2. **What are `JSON.stringify()` and `JSON.parse()`?**
   → Convert between object and JSON string.

3. **How does `fetch()` work?**
   → Returns a promise that resolves to a Response object.

4. **How to handle API errors?**
   → Check `response.ok` and use try–catch.

5. **What is the difference between GET and POST?**
   → GET retrieves; POST sends data to server.

---

### 🧩 Visual Summary

```
Browser JS → Fetch API → Server → JSON Response → JS Object
```

---

### 🔹 **16. Storage & Browser APIs**

---

#### 🧩 Concept

The browser provides built-in **Web APIs** to store data locally and interact with system features (like geolocation, clipboard, notifications).
For interviews, focus on **Storage APIs** + a few key browser interfaces.

---

## 🟦 1. Storage Options in Browser

| Type               | Lifespan                            | Size     | Accessible From         | Example Use                     |
| ------------------ | ----------------------------------- | -------- | ----------------------- | ------------------------------- |
| **localStorage**   | Persistent (until manually cleared) | ~5–10 MB | Same origin             | User preferences, session cache |
| **sessionStorage** | Until tab/browser closed            | ~5 MB    | Same tab only           | Temp form data                  |
| **cookies**        | Configurable                        | ~4 KB    | Sent with HTTP requests | Auth, tracking                  |

---

### **Local Storage Example**

```js
// Save data
localStorage.setItem('user', JSON.stringify({ name: 'Salaam', theme: 'dark' }));

// Retrieve data
const user = JSON.parse(localStorage.getItem('user'));
console.log(user.name); // Salaam

// Delete item
localStorage.removeItem('user');

// Clear all
localStorage.clear();
```

Persistent across sessions. Best for lightweight user settings.

---

### **Session Storage Example**

```js
sessionStorage.setItem('token', 'abc123');
console.log(sessionStorage.getItem('token'));
```

Data erased once the tab closes.

---

### **Cookies Example**

```js
document.cookie = "username=Salaam; max-age=3600; path=/";
```

**Drawbacks:**

* Smaller limit (~4 KB)
* Sent with each HTTP request (slower)
* Less secure if not using `Secure` and `HttpOnly` flags

---

## 🟩 2. IndexedDB (For larger data)

A low-level **NoSQL database** built into browsers.
Used for offline apps (like note-taking or PWA caching).

Example (conceptual):

```js
let request = indexedDB.open("AppDB", 1);
request.onsuccess = e => console.log("DB opened");
```

*Interviewers may ask only its purpose, not code.*

---

## 🟨 3. Other Common Browser APIs

### **a. Geolocation API**

```js
navigator.geolocation.getCurrentPosition(
  pos => console.log(pos.coords.latitude, pos.coords.longitude),
  err => console.error(err)
);
```

Requires user permission.

---

### **b. Clipboard API**

```js
navigator.clipboard.writeText("Copied text");
navigator.clipboard.readText().then(text => console.log(text));
```

---

### **c. Notification API**

```js
Notification.requestPermission().then(permission => {
  if (permission === "granted") new Notification("Hello from JS!");
});
```

---

### **d. Fetch API**

(covered earlier) — standard interface for network requests.

---

### **e. Web Storage Events**

React when localStorage changes (useful for multi-tab sync).

```js
window.addEventListener('storage', e => {
  console.log(`${e.key} changed to ${e.newValue}`);
});
```

---

## 🟪 4. Practical Example — Persist Theme Preference

```js
// Save user’s chosen theme
function setTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem('theme', theme);
}

// Load on startup
const saved = localStorage.getItem('theme');
if (saved) document.body.dataset.theme = saved;
```

---

## 🧠 Common Interview Questions

1. **Difference between localStorage, sessionStorage, and cookies?**
   → Persistence, capacity, and whether they’re sent to the server.

2. **Can localStorage hold objects?**
   → Only strings — convert via `JSON.stringify()` and `JSON.parse()`.

3. **When does sessionStorage clear?**
   → When the tab or window closes.

4. **Is localStorage synchronous or asynchronous?**
   → Synchronous (can block large writes).

5. **What is IndexedDB used for?**
   → Storing large, structured data offline.

---

### 🧩 Visual Summary

```
localStorage → persistent
sessionStorage → tab-limited
cookies → small + server-sent
```

---

### 🔹 **17. Advanced JavaScript Concepts (Performance, Optimization & Functional Patterns)**

---

#### 🧩 Concept

These topics test **depth of understanding** — not syntax.
They include advanced function behavior, memory efficiency, and design patterns used in production JS.

---

## 🟦 1. Higher-Order Functions (HOFs)

A **function that takes another function as input or returns one.**

```js
function operate(a, b, fn) {
  return fn(a, b);
}
const add = (x, y) => x + y;
console.log(operate(3, 4, add)); // 7
```

Used heavily in array methods (`map`, `filter`, `reduce`), event handlers, and functional programming.

---

## 🟩 2. Callback Hell → Promises → Async/Await

You already covered this earlier.
In interviews, they may ask to **convert callbacks to Promises** or explain **why async code is non-blocking**.

---

## 🟨 3. Debouncing and Throttling

Optimizing function calls in response to frequent events (like typing or scrolling).

### **Debounce (delay execution until user stops triggering)**

```js
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

window.addEventListener('resize', debounce(() => {
  console.log('Resized!');
}, 500));
```

**Use case:** Search bar, form input validation.

---

### **Throttle (run once every fixed time window)**

```js
function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

window.addEventListener('scroll', throttle(() => {
  console.log('Scroll event');
}, 1000));
```

**Use case:** Scroll tracking, window resize, drag events.

---

## 🟪 4. Currying

Transforming a function with multiple args into a sequence of single-arg functions.

```js
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(add(2)(3)(4)); // 9
```

**Use case:** Reusable partial functions in frameworks (React, Lodash).

---

## 🟫 5. Memoization

Caching results of function calls to optimize repeated computation.

```js
function memoize(fn) {
  const cache = {};
  return function(n) {
    if (n in cache) return cache[n];
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}

const factorial = memoize(n => (n <= 1 ? 1 : n * factorial(n - 1)));
console.log(factorial(5)); // 120
```

**Use case:** Expensive calculations (e.g., Fibonacci, API data reuse).

---

## 🟧 6. Deep Copy vs Shallow Copy (Review)

```js
const obj = { a: 1, b: { c: 2 } };

const shallow = { ...obj };
const deep = JSON.parse(JSON.stringify(obj));

obj.b.c = 99;
console.log(shallow.b.c); // 99 (linked)
console.log(deep.b.c);    // 2  (independent)
```

---

## 🟦 7. Immutability

Data should not be modified directly — create copies instead.

```js
const state = { name: "Salaam" };
const newState = { ...state, age: 22 };
```

Used in React, Redux, and functional programming to prevent side effects.

---

## 🟩 8. Polyfills

Custom implementation of newer features in older browsers.

Example: Polyfill for `Array.prototype.map`

```js
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function(cb) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(cb(this[i], i, this));
    }
    return result;
  };
}
```

**Use case:** Compatibility for older environments.

---

## 🟨 9. Event Loop Deep Dive (Recap)

Execution order:

```
1. Call Stack (synchronous)
2. Microtask Queue (Promises, async/await)
3. Macrotask Queue (setTimeout, setInterval)
```

Example:

```js
console.log("1");
setTimeout(() => console.log("2"));
Promise.resolve().then(() => console.log("3"));
console.log("4");
// Output: 1, 4, 3, 2
```

---

## 🟪 10. Performance Optimization Tips

| Problem                    | Solution                             |
| -------------------------- | ------------------------------------ |
| Repeated heavy computation | Memoization                          |
| Frequent DOM manipulation  | Use fragments or batch updates       |
| Excessive re-render        | Debounce/throttle user input         |
| Large API data             | Pagination, lazy load                |
| Memory leaks               | Remove event listeners, nullify refs |

---

## 🧠 Common Interview Questions

1. **What is a higher-order function?**
   → Function that accepts or returns another function.

2. **Difference between debouncing and throttling?**
   → Debounce delays execution; throttle limits frequency.

3. **What is currying and why use it?**
   → Transform multi-arg function to single-arg chain for reuse and clarity.

4. **What is memoization?**
   → Caching function results for faster re-execution.

5. **What are polyfills?**
   → Backward-compatible implementations of modern features.

6. **In what order do `Promise` and `setTimeout` execute?**
   → Promises (microtasks) run before timeouts (macrotasks).

---

### 🧩 Visual Summary

```
User Actions → Debounce/Throttle → Optimized Functions
Expensive Ops → Memoization → Cached Results
Functional JS → HOF + Currying → Reusable Logic
```

---

### 🔹 **18. JavaScript in Backend (Node.js Overview)**

---

#### 🧩 Concept

**Node.js** is a **runtime environment** that lets JavaScript run outside the browser — built on Chrome’s **V8 engine**.
It enables **server-side JS**, file handling, databases, and APIs.

---

## 🟦 1. Why Node.js?

| Feature              | Description                                             |
| -------------------- | ------------------------------------------------------- |
| **Non-blocking I/O** | Handles many requests simultaneously using async events |
| **Single-threaded**  | Event loop instead of multiple threads                  |
| **Fast**             | Uses Google’s V8 engine                                 |
| **Unified language** | Frontend + backend both in JS                           |
| **Scalable**         | Ideal for APIs and microservices                        |

---

## 🟩 2. Node.js Architecture Overview

```
Client Request
    ↓
Event Loop → Non-blocking I/O → Thread Pool (libuv)
    ↓
Callback Queue → Event Loop → Response
```

* **Single-threaded** but can delegate heavy tasks to thread pool (e.g., file read, DB).
* **libuv** handles async operations.
* **Event loop** decides what to run next.

---

## 🟨 3. The `require` System (Modules)

### **CommonJS Syntax**

```js
// math.js
function add(a, b) { return a + b; }
module.exports = { add };

// app.js
const math = require('./math');
console.log(math.add(2, 3));
```

### **ES Module Syntax (Modern Node)**

```js
// math.js
export const add = (a, b) => a + b;

// app.mjs
import { add } from './math.mjs';
```

---

## 🟪 4. Core Node.js Modules

| Module   | Purpose         | Example                  |
| -------- | --------------- | ------------------------ |
| `fs`     | File system     | Read/write files         |
| `path`   | File paths      | Join/resolve directories |
| `os`     | System info     | CPU, memory, hostname    |
| `http`   | Server creation | Build web servers        |
| `events` | Custom events   | EventEmitter pattern     |

---

### **Example: Simple Web Server**

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js');
});

server.listen(3000, () => console.log('Server running on port 3000'));
```

➡ Run:
`node app.js`
Open `http://localhost:3000`

---

## 🟫 5. File System (`fs`)

```js
const fs = require('fs');

// Write
fs.writeFileSync('test.txt', 'Hello Node');

// Read
const data = fs.readFileSync('test.txt', 'utf8');
console.log(data);
```

Async version:

```js
fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

## 🟧 6. `path` Module

```js
const path = require('path');

console.log(path.basename('/folder/app.js')); // app.js
console.log(path.join(__dirname, 'files', 'text.txt'));
```

---

## 🟦 7. `EventEmitter`

Used to define and handle custom events.

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', name => console.log(`Hello, ${name}`));
emitter.emit('greet', 'Salaam');
```

---

## 🟩 8. NPM (Node Package Manager)

### **Basics**

* Install packages globally or locally.
* Creates a `package.json` to track dependencies.

```bash
npm init -y
npm install express
```

---

## 🟨 9. Express.js (Most Common Node Framework)

A minimal and fast framework to build APIs and web servers.

```js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World'));
app.post('/user', (req, res) => res.json(req.body));

app.listen(3000, () => console.log('Server on port 3000'));
```

---

## 🟪 10. Environment Variables

Used for security and configuration (e.g., API keys).

```js
// .env
PORT=4000

// server.js
require('dotenv').config();
console.log(process.env.PORT);
```

---

## 🟫 11. Connecting to Databases (Brief)

| Database       | Library    | Example                                            |
| -------------- | ---------- | -------------------------------------------------- |
| **MongoDB**    | `mongoose` | `mongoose.connect('mongodb://localhost:27017/db')` |
| **MySQL**      | `mysql2`   | SQL queries from Node                              |
| **PostgreSQL** | `pg`       | Query with async/await                             |

---

## 🟧 12. Node.js and Asynchronous Pattern

Node heavily uses **callbacks**, **Promises**, and **async/await**:

```js
const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('test.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
readFile();
```

---

## 🧠 Common Interview Questions

1. **What is Node.js?**
   → JS runtime built on V8 engine for server-side code.

2. **Why is Node.js single-threaded but scalable?**
   → Non-blocking async I/O using event loop and worker threads.

3. **Difference between CommonJS and ES Modules?**
   → `require` vs `import`, runtime vs compile-time.

4. **How do you create a simple HTTP server?**
   → Using `http.createServer()`.

5. **What are some built-in Node modules?**
   → `fs`, `path`, `os`, `http`, `events`.

6. **What is Express used for?**
   → Routing, middleware, and easy REST API creation.

7. **Why use environment variables?**
   → To keep secrets/config out of code.

---

### 🧩 Visual Summary

```
Browser JS → Client
Node.js → Server
Database → Persistent Storage
All Connected via JSON APIs
```

---

✅ **End of Full JavaScript Interview Revision Series**

You now have:

* 18 structured topics
* Interview-focused examples
* Core → Advanced → Backend coverage

---
