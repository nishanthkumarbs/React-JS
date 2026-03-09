## ⚡ ES6 Features

This project uses several modern **JavaScript ES6 features** to write cleaner, more efficient, and maintainable code.

---

### 🔹 Let
`let` is used to declare variables that can be **reassigned** and are **block-scoped**, which helps avoid scope-related issues.

```javascript
let count = 0;
count++;
console.log(count);

```
### 🔹Const

`const` is used to declare variables whose value cannot be reassigned after initialization.

```javascript
const appName = "Todo App";
console.log(appName);

```

### 🔹Arrow Functions

Arrow functions provide a shorter syntax for writing functions and automatically bind `this`.

```javascript
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3));


```

### 🔹Promises

Promises are used to handle asynchronous operations such as API requests.

```javascript
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


```

### 🔹 Destructuring

Destructuring allows **extracting values from arrays or objects into separate variables**.

```javascript
const user = {
  name: "Nishanth",
  age: 22
};

const { name, age } = user;

console.log(name);
console.log(age);


```

### 🔹 Rest Parameter

The rest parameter allows a function to **accept multiple arguments as an array**.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num);
}

console.log(sum(1, 2, 3, 4));

```

### 🔹 Spread Operator

The spread operator is used to **expand elements of an array or object**.

```javascript
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);

```