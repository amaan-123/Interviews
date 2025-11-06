## Technical Interview mistakes

- Thouroughly prepare all in CV(even if learnt long time ago but relevant). Don't hesitate in including things in your CV that you have done, but avoid writing what you can't answer for.
- Normalisation show on paper
- Entity & attributes
- JOIN query: two tables: employee & department, write select statement
- Can objects be created for abstract classes
- Two different inherited interfaces with the same property "Name", implemented by another derived class

Direct answers below, concise and correct.

**1) High-level Normalization**
Normalization is a set of rules to structure a relational schema to reduce redundancy and anomalies (insert/update/delete) by splitting data into related tables and using keys.

- **1NF**: Atomic values. Each column holds indivisible values. No repeating groups.
- **2NF**: 1NF + every non-key column fully depends on the whole primary key. (Removes partial dependencies; relevant for composite keys.)
- **3NF**: 2NF + no transitive dependency. Non-key columns depend only on the primary key, not on other non-key columns.
- **BCNF**: Stronger than 3NF. Every functional dependency X → Y requires X to be a superkey. Use for tricky dependency cases.

When to stop: choose the highest normal form that balances reduced redundancy vs. performance/complexity. Typical OLTP: 3NF (or BCNF if needed). Denormalize only for performance with justification.

---

**2) Entity & Attributes — and relation to normalization**

- **Entity**: a real-world object or concept represented by a table (e.g., `Employee`, `Department`).
- **Attribute**: a property/column of that entity (e.g., `Employee.id`, `Employee.name`, `Employee.dept_id`).
- **Relation to normalization**: normalization examines attributes and their dependencies to decide if attributes should live in the same table or be moved to another table.

  - Primary key identifies the entity.
  - Foreign keys represent relationships between entities.
  - Functional dependencies between attributes determine whether to split tables (to satisfy 2NF/3NF/BCNF).

Example: if `Employee` has `dept_name` and `department` also stores `dept_name`, that is redundant. Normalization moves `dept_name` to `Department` and `Employee` stores `dept_id` as a FK.

---

**3) JOIN query (employee & department)**

Basic inner join selecting all employee columns with their department name:

```sql
SELECT e.*, d.name AS department_name
FROM employee e
JOIN department d
  ON e.dept_id = d.id;
```

Variants:

- Use `LEFT JOIN` if you want employees even when `dept_id` is NULL or no matching department.
- If you want unique departments from the join:

```sql
SELECT DISTINCT d.id, d.name
FROM employee e
JOIN department d
  ON e.dept_id = d.id;
```

Note: correct syntax is `SELECT DISTINCT columns` or `SELECT DISTINCT *`. `SELECT */DISTINCT` is invalid.

**About `DISTINCT` vs `GROUP BY`**

- `DISTINCT` removes duplicate result rows. Use it when you want unique rows and no aggregation.
- `GROUP BY` groups rows for aggregation (COUNT, SUM, AVG). SQL requires that every selected non-aggregated column must appear in `GROUP BY`. Use `GROUP BY` when you need aggregates.

Example: count employees per department:

```sql
SELECT d.id, d.name, COUNT(*) AS employee_count
FROM department d
LEFT JOIN employee e
  ON e.dept_id = d.id
GROUP BY d.id, d.name;
```

Do not use `GROUP BY` as a substitute for `DISTINCT` unless you are aggregating.

---

**4) Can objects be created for abstract classes?**

- **No.** Abstract classes cannot be instantiated directly. They can define abstract members that subclasses implement.
- You can declare a variable of the abstract type and assign it an instance of a concrete subclass.

C# example:

```csharp
abstract class Animal { public abstract void Speak(); }
class Dog : Animal { public override void Speak() => Console.WriteLine("Woof"); }

// invalid: var a = new Animal(); // compile error
Animal a = new Dog(); // valid
a.Speak(); // calls Dog.Speak
```

---

**5) Two interfaces A & B both define `Name`. How can class C implement them differently?**

In **C#** use *explicit interface implementation* to provide separate implementations for each interface member:

```csharp
interface IA { string Name { get; } }
interface IB { string Name { get; } }

class C : IA, IB
{
    // default/public implementation (optional)
    public string Name => "Default";

    // explicit implementations for distinct behavior
    string IA.Name => "IA.Name implementation";
    string IB.Name => "IB.Name implementation";
}

// usage:
C c = new C();
Console.WriteLine(((IA)c).Name); // "IA.Name implementation"
Console.WriteLine(((IB)c).Name); // "IB.Name implementation"
Console.WriteLine(c.Name);       // "Default" (the public one)
```

Notes:

- Explicit implementations are accessible only when the instance is cast to that interface.
- For methods the pattern is the same:

```csharp
void IA.Do() { /* IA behavior */ }
void IB.Do() { /* IB behavior */ }
```

In **Java**: if both interfaces declare the same method signature (no conflict) a single class method satisfies both. To provide different behaviors you must use helper methods or adapter objects because Java does not support explicit interface implementation like C#. If interfaces have `default` methods with different implementations, the class must override and resolve the conflict by providing its own method.

---

# C# Logical test code review

Clear. Your code works but has small bugs, inefficiencies, and edge cases to note. Below I’ll (1) explain what each part does, (2) point out issues, (3) give a corrected, cleaner version, and (4) list complexity and edge-case notes.

---

### 1) What the code does (step-by-step)

1. Reads `N` from the console and validates it is an integer in `[1, 200000]`.
2. Reads a space-separated line of integers. Splits it into strings and parses each to `int`, adding valid ints to `unsortedSeq`. If any token is not an integer it prints `"Not a num"` and exits.
3. Sorts the list of integers. (You call sort twice — redundant.)
4. Iterates adjacent pairs in the sorted array. For any adjacent pair where the difference is greater than 1 it repeatedly adds the missing integers between them to `missingNums`.

   - Example pair `3` and `6` adds `4`, `5`.
5. If `missingNums` is non-empty it prints them comma-separated; otherwise prints `"None missing"`.

---

### 2) Bugs / style / inefficiency issues

- **Syntax bug:** `unsortedSeq.Sort()` in your snippet misses a semicolon.
- **Double sort:** You call `unsortedSeq.Sort()` then convert to array and `Array.Sort(seqToSort)`. Only one sort is needed.
- **Inefficient/buggy printing loop:** You use `foreach (int num in missingNums)` and inside check `missingNums.IndexOf(num)`. That makes printing O(M²) and can be wrong if duplicates exist (IndexOf finds first occurrence). Use indexed `for` or `string.Join`.
- **No check vs `N`:** You read `N` but commented out the `numString.Length == N` check. If you need to enforce the provided count do that validation.
- **Potential heavy memory:** If the gap between min and max is huge, `missingNums` can become very large and may exhaust memory. Example: `-1_000_000_000` and `1_000_000_000` would generate 2 billion missing ints — impossible.
- **Duplicates:** Your logic assumes distinct integers. The prompt says distinct but if duplicates appear the `seqToSort[i+1] - seqToSort[i]` could be zero or negative and the loop still works but produce wrong results unless you deduplicate.
- **Output formatting:** Your code prints comma with no space. That matches the sample but if you prefer human-friendly output use `", "`.

---

### 3) Clean, corrected and safer version

This version fixes the issues, deduplicates, avoids O(M²) printing, and warns about huge ranges.

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

class MissingNumberFinder
{
    static void Main()
    {
        Console.WriteLine("Enter the count of integers your sequence has:");
        string input = Console.ReadLine()?.Trim();
        if (string.IsNullOrEmpty(input) || !int.TryParse(input, out int N))
        {
            Console.WriteLine("Enter Valid Input");
            return;
        }

        if (N < 1 || N > 200000)
        {
            Console.WriteLine("Num not in range");
            return;
        }

        Console.WriteLine("Enter the space-separated distinct integers in range [-10^9 to 10^9]");
        string sequence = Console.ReadLine() ?? "";
        string[] tokens = sequence.Split(' ', StringSplitOptions.RemoveEmptyEntries);

        if (tokens.Length != N)
        {
            // optional: enforce count
            // Console.WriteLine("Count of numbers submitted doesn't match initial value.");
            // return;
            // or just proceed with parsed tokens
        }

        var list = new List<int>(tokens.Length);
        foreach (var t in tokens)
        {
            if (!int.TryParse(t, out int v))
            {
                Console.WriteLine("Not a num");
                return;
            }
            list.Add(v);
        }

        // Deduplicate and sort
        int[] arr = list.Distinct().OrderBy(x => x).ToArray();
        if (arr.Length <= 1)
        {
            Console.WriteLine("None missing");
            return;
        }

        // Quick safe-check: if range too large, bail out
        long range = (long)arr[arr.Length - 1] - (long)arr[0] - (arr.Length - 1);
        if (range > 10_000_000) // threshold you decide
        {
            Console.WriteLine("Range of missing numbers too large to list.");
            return;
        }

        var missing = new List<int>();
        for (int i = 0; i < arr.Length - 1; i++)
        {
            int a = arr[i];
            int b = arr[i + 1];
            if (b - a > 1)
            {
                for (int x = a + 1; x < b; x++)
                    missing.Add(x);
            }
        }

        if (missing.Count == 0)
        {
            Console.WriteLine("None missing");
        }
        else
        {
            Console.WriteLine(string.Join(",", missing));
        }
    }
}
```

Notes on this version:

- Uses `Distinct()` to remove duplicates.
- Uses `OrderBy`/`ToArray` for single-sort.
- Checks for absurdly large missing range and refuses to list if too large. Change threshold as needed.
- Uses `string.Join` for O(M) printing.

---

### 4) Complexity and memory

- **Time:** Sorting dominates `O(K log K)` where `K` is number of parsed integers (<= N). Building missing list loops over adjacent gaps and appends M missing numbers. So total time `O(K log K + M)`.
- **Memory:** `O(K + M)` to store array and missing list. If M is huge the program will run out of memory. That is why a range check is important.

---

### 5) Edge cases to test / handle

- Single element input (e.g., `1` and value `5`) → output `"None missing"`.
- All consecutive numbers → `"None missing"`.
- Duplicates in input → deduplicate or validate and reject.
- Very large gaps → avoid constructing billions of ints. Prefer streaming output (but streaming a billion numbers is still infeasible).
- Negative numbers and negative-to-positive ranges work fine.
- Non-matching `N` vs actual tokens → decide whether to enforce.

---

### 6) Alternative approach (space-efficient printing)

If you must print results but cannot afford storing all missing numbers, stream them directly while iterating gaps and write commas carefully:

```csharp
bool firstOut = true;
for (...) {
  for (int x = a + 1; x < b; x++) {
    if (!firstOut) Console.Write(",");
    Console.Write(x);
    firstOut = false;
  }
}
if (firstOut) Console.WriteLine("None missing");
```

This avoids storing `missing` but still cannot handle astronomically large ranges.

---

## C# (using Visual Studio 2022)

- Masterclass notes (make it possible)
- revise self notes

## Fresher Major topics

- JavaScript fundamentals: data types, dynamic typing, primitives vs. non‑primitives, immutability, arrays, objects, functions, scope (`var`, `let`, `const`), loops (`for`, `while`, `do‑while`, `for‑of`, `for‑in`), function types (named, anonymous, expressions, arrow, callbacks, higher‑order), event handling (`addEventListener`), asynchronous vs. synchronous execution, `map` method  
- C# Object‑Oriented Programming: OOP pillars (Abstraction, Polymorphism, Inheritance, Encapsulation), access modifiers (`private`, `protected`, `public`, `internal`), “is‑a” relationship, class vs. object, upcoming C# topics (interfaces, abstract classes, virtual methods, method overriding/overloading)  
- HTML basics: document structure, semantic tags (`header`, `footer`, `nav`, `section`, `article`, `aside`, `span`), header hierarchy (`h1`‑`h6`), anchor (`<a>`) vs. link (`<link>`), block‑level vs. inline elements, self‑closing tags (`img`, `br`, `hr`, `meta`, `link`), semantic importance of `<strong>`/`<b>` and `<em>`/`<i>`  
- HTML5 features: multimedia tags (`video`, `audio`), new input types (`email`, `date`), `<canvas>` element, Document Object Model (DOM) overview  
- CSS fundamentals: application methods (inline, internal, external), selector types (ID, class, universal, group, nested), pseudo‑classes (`:hover`, `:focus`), pseudo‑elements (`::first-letter`, `::first-line`), units (`px`, `em`, `rem`), positioning (`relative`, `absolute`, `fixed`), animations/transitions, responsive design with media queries  

---

# 🧠 Full-Stack Developer Interview Cheatsheet

*(C#, HTML, CSS, JavaScript, Git, Postman, SQL, Projects & HR)*

---

## ⚙️ 1. C# Core + Object-Oriented Programming

### 🔹 OOP Pillars

| Concept           | Definition                                                                  | Example                                                       |
| ----------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Encapsulation** | Binding data + methods inside a class; hiding internal details.             | Private fields, public getters/setters.                       |
| **Inheritance**   | Derive one class from another (“is-a” relationship).                        | `class Dog : Animal {}`                                       |
| **Polymorphism**  | Multiple forms — method overriding (runtime) or overloading (compile-time). | `virtual` + `override`, or same method name different params. |
| **Abstraction**   | Hide implementation details; expose only necessary behavior.                | Abstract classes, interfaces.                                 |

### 🔹 Access Modifiers

`public` – accessible everywhere
`private` – within same class only
`protected` – same class + derived classes
`internal` – within same assembly

### 🔹 Classes vs Objects

- **Class:** Blueprint/template defining properties & methods.
- **Object:** Instance of a class created using `new`.

### 🔹 Important OOP Topics

- **Interfaces:** Define contract without implementation (`interface IShape { void Draw(); }`).
- **Abstract classes:** Partial abstraction (can have implemented + abstract methods).
- **Virtual/Override:** Enables runtime polymorphism.
- **Method Overloading:** Same name, different parameters (compile-time).
- **Method Overriding:** Redefine inherited virtual method (runtime).

### 🔹 Other C# Essentials

- **Properties:** Shorthand for getter/setter (`public int Id { get; set; }`)
- **Constructors:** Initialize object data, same name as class.
- **Static members:** Belong to class, not object.
- **Collections:** `List<T>`, `Dictionary<K,V>`, `HashSet<T>`
- **LINQ:** Query syntax on collections (`students.Where(s => s.Marks > 80)`), XML documents, SQL databases, ADO.NET datasets, and any data source that supports the `IEnumerable` or `IQueryable` interfaces.
- **Exception Handling:** `try`–`catch`–`finally` blocks; `throw` custom exception.
- **Async/Await:** For non-blocking code using `Task`.
- **Value vs Reference Types:** Structs vs Classes.
- **Namespace:** Logical grouping of related classes.

---

## 💻 2. HTML Essentials

### 🔹 HTML Basics

- Structure:

  ```html
  <!DOCTYPE html>
  <html>
    <head>...</head>
    <body>...</body>
  </html>
  ```

- **Semantic Tags:** `<header>`, `<footer>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<main>`, `<span>`

- **Header hierarchy:** `<h1>` → `<h6>` (SEO + accessibility importance)
- **Anchor `<a>` vs `<link>`:**

  - `<a>` = clickable hyperlink inside page content.
  - `<link>` = resource link (e.g., CSS file in `<head>`).
- **Block vs Inline:**

  - Block: `<div>`, `<p>`, `<section>`
  - Inline: `<span>`, `<a>`, `<img>`
- **Self-closing tags:** `<img>`, `<br>`, `<hr>`, `<meta>`, `<link>`
- **Text semantics:**

  - `<strong>` vs `<b>` → strong = important emphasis (semantic).
  - `<em>` vs `<i>` → em = emphasized meaning (semantic).

### 🔹 HTML5 Features

- **Multimedia:** `<video>`, `<audio>` with `controls` attribute.
- **New input types:** `email`, `date`, `number`, `url`, `color`, `range`.
- **Canvas element:** Used for drawing via JS.
- **Semantic elements for better SEO and readability.**
- **DOM Overview:** HTML document represented as a tree (nodes = elements, attributes, text). Manipulated using JS.

---

## 🎨 3. CSS Fundamentals

### 🔹 Applying CSS

- **Inline:** `<p style="color:red;">`
- **Internal:** `<style>` inside `<head>`
- **External:** `<link rel="stylesheet" href="style.css">`

### 🔹 Selector Types

- ID: `#idname { }`
- Class: `.classname { }`
- Universal: `* { }`
- Group: `h1, h2, p { }`
- Descendant/Nested: `div p { }`

### 🔹 Pseudo-Classes / Elements

- Pseudo-classes: `:hover`, `:focus`, `:active`, `:nth-child(n)`
- Pseudo-elements: `::first-letter`, `::first-line`, `::before`, `::after`

### 🔹 Units

- Absolute: `px`
- Relative: `em`, `rem`, `%`, `vw`, `vh`

### 🔹 Box Model

`margin` → `border` → `padding` → `content`

### 🔹 Positioning

`static` | `relative` | `absolute` | `fixed` | `sticky`

### 🔹 Display

`block`, `inline`, `inline-block`, `flex`, `grid`

### 🔹 Flexbox Essentials

- `display:flex`
- `justify-content`, `align-items`, `flex-direction`

### 🔹 Transitions & Animations

```css
div { transition: all 0.3s ease; }
@keyframes fade { from {opacity:0;} to {opacity:1;} }
```

### 🔹 Responsive Design

```css
@media screen and (max-width: 600px) { ... }
```

---

## ⚡ 4. JavaScript Fundamentals

### 🔹 Core Concepts

- **Data Types:**
  `Number`, `String`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`, and Objects.
- **Primitives vs Non-Primitives:**
  Primitives = immutable (values). Objects/Arrays = mutable (references).
- **Dynamic Typing:** Type decided at runtime.

### 🔹 Variables & Scope

| Keyword | Scope          | Reassignable | Redeclarable |
| ------- | -------------- | ------------ | ------------ |
| `var`   | function-scope | ✅            | ✅            |
| `let`   | block-scope    | ✅            | ❌            |
| `const` | block-scope    | ❌            | ❌            |

### 🔹 Functions

- Named, Anonymous, Function Expressions, Arrow Functions
- Callback functions → passed as parameters
- Higher-Order Functions → accept or return another function

### 🔹 Control Flow

- Loops: `for`, `while`, `do-while`, `for-of`, `for-in`
- Conditional: `if`, `else if`, `switch`
- `break`, `continue`

### 🔹 Arrays & Objects

```js
let arr = [1,2,3];
arr.map(x => x*2);

let person = {name:'Salaam', age:25};
console.log(person.name);
```

### 🔹 Important Methods

`map`, `filter`, `reduce`, `forEach`, `find`, `includes`

### 🔹 Event Handling

```js
button.addEventListener('click', function(){ ... });
```

### 🔹 Asynchronous vs Synchronous

- **Synchronous:** Executes line-by-line, blocking.
- **Asynchronous:** Uses event loop; non-blocking (e.g., setTimeout, fetch, async/await).

### 🔹 Fetch API Example

```js
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

## 🧩 5. Git & GitHub

| Concept          | Command / Description         |
| ---------------- | ----------------------------- |
| Initialize repo  | `git init`                    |
| Check status     | `git status`                  |
| Stage changes    | `git add .`                   |
| Commit changes   | `git commit -m "message"`     |
| Create branch    | `git branch feature`          |
| Switch branch    | `git checkout feature`        |
| Merge branch     | `git merge feature`           |
| Remote add       | `git remote add origin <url>` |
| Push changes     | `git push origin main`        |
| Pull updates     | `git pull origin main`        |
| Undo last commit | `git reset --soft HEAD~1`     |
| See history      | `git log`                     |

---

## 🧮 6. Postman & API Basics

| Concept          | Description                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| **REST Methods** | GET (read), POST (create), PUT (update), DELETE (remove)                |
| **Request**      | URL + Method + Headers + Body                                           |
| **Headers**      | e.g., `Content-Type: application/json`, `Authorization: Bearer <token>` |
| **Body**         | JSON format for POST/PUT requests                                       |
| **Response**     | JSON with status code (200, 400, 500, etc.)                             |
| **API Key Auth** | Stored as environment variable in Postman                               |
| **Testing**      | Validate responses using Postman’s “Tests” tab (JavaScript snippets).   |

---

## 🗄️ 7. SQL & Power Platform Quick Recap

| Concept               | Example                                  |
| --------------------- | ---------------------------------------- |
| **Basic Queries**     | `SELECT * FROM table;`                   |
| **Filtering**         | `WHERE`, `ORDER BY`, `LIMIT`             |
| **Aggregation**       | `COUNT()`, `SUM()`, `AVG()`, `GROUP BY`  |
| **Joins**             | `INNER`, `LEFT`, `RIGHT`, `FULL`         |
| **Constraints**       | `PRIMARY KEY`, `FOREIGN KEY`, `NOT NULL` |
| **Power BI**          | Data visualization and dashboarding.     |
| **Power Automate**    | Automate workflows like email alerts.    |
| **SQL Server (SSMS)** | Manage relational data for projects.     |

---

## ☁️ 8. Azure Services (Used in Your Projects)

| Service                    | Purpose                               | Example Usage                                   |
| -------------------------- | ------------------------------------- | ----------------------------------------------- |
| **Azure Content Safety**   | Detects harmful/offensive content.    | Used with Fetch API in Content Checker project. |
| **Azure OpenAI Service**   | Access GPT models via REST endpoints. | Used in Prompt/Chat website via Postman.        |
| **Azure Foundry Endpoint** | Custom deployment of OpenAI model.    | Required API key, tested via Postman.           |

---

## 🧠 9. Project Summary Recall Sheet

| Project                    | Key Tech                      | Core Idea                                  | Talking Points                      |
| -------------------------- | ----------------------------- | ------------------------------------------ | ----------------------------------- |
| **School Website**         | HTML, CSS, JS                 | Static website with forms and data display | Layout, form validation, structure. |
| **Content Safety Checker** | JS Fetch API, Azure API       | Text moderation using REST API             | JSON request/response, API headers. |
| **Chat Prompt Website**    | Postman, Azure OpenAI         | User input → AI reply                      | REST testing via Postman.           |
| **Inventory Dashboard**    | Power BI, SQL, Power Automate | Dashboard triggers low-stock alerts        | Integration + workflow logic.       |

---

## 🗣️ 10. HR / Behavioral Pointers

- **Tell me about yourself:** Focus on learning journey, projects, tech stack.
- **Strengths:** Quick learner, logical problem-solving, hands-on project work.
- **Weakness:** Limited production experience but strong learning orientation.
- **Teamwork example:** Mention group assignments or IT audit collaboration.
- **Future goal:** To grow into a full-stack developer contributing to scalable systems.

---

## ⚡ Rapid Recall Formula

| Category     | 5-Second Keywords                             |
| ------------ | --------------------------------------------- |
| **C#**       | OOP pillars, interface, abstract, async, LINQ |
| **HTML**     | semantic, forms, tags, structure              |
| **CSS**      | box-model, flex, media queries, pseudo        |
| **JS**       | data types, scope, async, map, DOM            |
| **Git**      | add, commit, branch, push, merge              |
| **Postman**  | REST verbs, headers, body, status             |
| **SQL**      | joins, group by, aggregate                    |
| **Projects** | Azure API + Power BI dashboards               |

---

Excellent — this gives a **very complete base** for interview preparation. You’ve already cleared the coding test, so your upcoming **technical interview** will most likely focus on:

✅ **C# Core & OOPs (Theory + Scenario)**
✅ **HTML, CSS, JavaScript fundamentals**
✅ **Your own projects (conceptual understanding, not syntax)**
✅ **API basics, Postman, Git/GitHub usage**
✅ **A few SQL and Azure service references (because you mentioned them)**
✅ **Soft/HR questions**

---

## 🎯 Step 1 — Priority-Based Revision Strategy

### **Tier 1 — Must be Fluent (C# + OOPs)**

You said you’ve covered this but need **revision**. Here’s what to focus on for interview talk-throughs:

| Concept                           | Key Revisions                                         | Example Questions                                         |
| --------------------------------- | ----------------------------------------------------- | --------------------------------------------------------- |
| **OOPs in C#**                    | Encapsulation, Inheritance, Polymorphism, Abstraction | How does abstraction differ from encapsulation?           |
| **Class vs Struct**               | Value vs reference types                              | When would you use a struct?                              |
| **Interfaces & Abstract Classes** | Use cases, multiple inheritance                       | Why prefer interface over abstract class?                 |
| **Access Modifiers**              | public, private, protected, internal                  | Can internal members be accessed in another assembly?     |
| **Static & Instance Members**     | Lifecycle, when to use static                         | Can you override a static method?                         |
| **Collections & LINQ**            | `List<T>`, `Dictionary<K,V>`, `.Select()`, `.Where()` | How do you filter a list of students by marks using LINQ? |
| **Exception Handling**            | try–catch–finally, custom exceptions                  | What happens if `finally` throws an exception?            |
| **Asynchronous Programming**      | async/await, Task vs Thread                           | Explain how async improves performance.                   |

---

### **Tier 2 — Front-End Refresh (HTML, CSS, JS)**

Since you’ve “forgotten much,” you only need **interview-level recall**, not deep syntax memorization.
Focus on **conceptual clarity + small examples**.

#### 🔹 HTML

- Structure: `<!DOCTYPE html>`, `<head>`, `<body>`
- Forms: `action`, `method`, `name`, `input types`
- Semantic tags: `<header>`, `<article>`, `<section>`, `<footer>`
- Accessibility: `alt`, `label for`, `aria-*`

**Practice question examples:**

- What are semantic elements in HTML5?
- How do you submit a form and handle it via JavaScript or backend?
- Difference between `<div>` and `<section>`?

#### 🔹 CSS

- Box model (margin, border, padding, content)
- Positioning (`absolute`, `relative`, `fixed`, `sticky`)
- Flexbox basics (`display:flex`, `justify-content`, `align-items`)
- Media queries (`@media screen and (max-width:600px)`)

**Practice question examples:**

- How do you center a `<div>` vertically and horizontally?
- What’s the difference between inline, block, and inline-block elements?

#### 🔹 JavaScript

- Variables (`let`, `const`, `var`)
- Functions and arrow functions
- DOM manipulation: `document.querySelector`, `innerText`, `addEventListener`
- Events and event bubbling
- Promises and async/await
- JSON, fetch API basics

**Practice question examples:**

- Explain difference between `==` and `===`.
- How does `this` work in JS?
- Write a simple example using `fetch()` to call an API.

---

### **Tier 3 — Git, GitHub, Postman**

These are smaller sections but easy marks.

| Tool           | Focus Areas                                               | Questions to Expect                                                     |
| -------------- | --------------------------------------------------------- | ----------------------------------------------------------------------- |
| **Git/GitHub** | staging vs commit, branching, pull/push, merge conflicts  | How do you undo a commit? What’s the difference between merge & rebase? |
| **Postman**    | REST basics, GET/POST/PUT/DELETE, headers, body, API keys | How did you test your Azure OpenAI API in Postman?                      |
| **General**    | version control purpose                                   | Why use Git in team environments?                                       |

---

## 🎯 Step 2 — Projects Deep-Dive Prep (Relearn Workflows)

You **must be able to explain the *why* and *how* clearly**. The interviewer often asks “Walk me through your project” — not “show me your code.”

### **1. School Website (HTML/CSS/JS)**

- **Goal:** Basic multi-page static website (Home, About, Form, Display).
- **Tech:** HTML (structure), CSS (layout), JS (form validation/DOM updates).
- **Interview tip:** Emphasize layout, responsive structure, and form validation.

### **2. Azure Content Safety Checker**

- **Goal:** Check input text for offensive content using Azure Content Safety API.
- **Flow:**

  1. Frontend → Fetch API → Azure endpoint
  2. Sent text in JSON → received safety score
  3. Displayed result on webpage
- **Focus:** Fetch API usage, request headers, async/await handling.

### **3. Azure OpenAI Chat Website (via Postman)**

- **Goal:** Send user prompt → Azure OpenAI model → receive generated reply.
- **Flow (in Postman):**

  - Method: POST
  - URL: Azure endpoint (foundry deployment)
  - Header: API key, content-type
  - Body: JSON with `prompt`, `max_tokens`
- **Mention:** Tested first via Postman, planned to connect via JS fetch later.

### **4. Inventory Management Dashboard (Power BI + Power Automate + SQL Server)**

- **Goal:** Generate stock alerts based on dashboard metrics.
- **Flow:**

  1. SQL Server stores inventory data
  2. Power BI visualizes stock trends
  3. Power Automate triggers email alerts for low stock
- **Key point:** Data integration between SQL, Power BI, and Power Automate.

---

## 🎯 Step 3 — HR & Communication Prep

Even as a fresher, you’ll get:

- “Tell me about yourself.”
- “Explain one of your projects.”
- “Which part of full stack interests you more?”
- “What challenges did you face?”
- “How do you debug or learn new tech?”

> ✳️ Tip: Use **STAR (Situation – Task – Action – Result)** format for any project or challenge question.

---

## 🎯 Step 4 — 1-Week Revision Plan (Compact)

| Day         | Focus                                                           |
| ----------- | --------------------------------------------------------------- |
| **Day 1-2** | Revise C# OOPs + collections + async/await + exception handling |
| **Day 3**   | HTML/CSS concepts + form attributes + flexbox                   |
| **Day 4**   | JavaScript core + fetch + DOM manipulation                      |
| **Day 5**   | Git/GitHub commands + Postman API test recap                    |
| **Day 6**   | Revisit project workflows & diagrams                            |
| **Day 7**   | Mock Q&A — C#, Frontend, Projects, HR                           |

---
