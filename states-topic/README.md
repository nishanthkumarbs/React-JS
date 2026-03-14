# 🔄 React State

## 📌 What is State?

- **State** is a **JavaScript object** used in React.
- It is used to **store and update data at the component level**.
- State allows components to **change their behavior dynamically**.
- By default, **State is available in Class-Based Components (CBC)**.
- State is **mutable**, meaning its value can change.
- State can store two types of values:
  1. **Null**
  2. **Object**

---

# 🧩 Ways to Initialize State

State can be initialized in **two ways** in Class-Based Components.

## 1️⃣ Constructor Way

```jsx
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Nishanth",
      age: 22
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.age}</h2>
      </div>
    );
  }
}

export default App;
```
---

### 2️⃣ State Object Way

```jsx
import React, { Component } from "react";

class App extends Component {
  state = {
    name: "Nishanth",
    age: 22
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.age}</h2>
      </div>
    );
  }
}

export default App;

```
---

# 🪝 React Hooks

## 📌 What are Hooks?

- **Hooks** are special **JavaScript functions provided by React**.
- Hooks allow developers to **use React features in Function-Based Components (FBC)**.
- Hooks always start with the prefix **`use`**.
  - Example: `useState`, `useEffect`
- Whenever we want to use hooks, it is **mandatory to import them from React**.

---

## 📖 Definition / Usage of Hooks

Hooks are used to **utilize features of Class-Based Components (CBC) in Function-Based Components (FBC)**.

Before Hooks:
- State and lifecycle methods were only available in **Class Components**.

After Hooks:
- These features can now be used in **Function Components**.

---

## ⚠️ Important Points

- Hooks are **available only in Function-Based Components (FBC)**.
- Hooks **must start with `use`**.
- Hooks should be **imported from the React library before using them**.

### Example Import

```jsx
import React, { useState } from "react";

```

### 🔹 Example of a Hook (`useState`)

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;

```
---

## 📌 Types of Hooks

React Hooks are divided into **two categories**:

### 🔹 Basic Hooks
1. **useState()**
2. **useContext()**
3. **useEffect()**

### 🔹 Advanced Hooks
1. **useMemo()**
2. **useCallback()**
3. **useRef()**
4. **useRouter()**

---

# 🔹 Syntax of `useState()`

```jsx
const [count, setCount] = useState(0);
```