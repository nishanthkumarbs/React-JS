# ⚛️ React Components

## 📌 What are Components?
- Components are the **core building blocks of the UI** in React.
- Components are **reusable**.
- Components are **independent**.
- Web pages are divided into **multiple components** and then combined in a **parent component (`App.jsx`)**.

React provides **two types of components**:

1. **Class-Based Components (CBC)**
2. **Function-Based Components (FBC)**

---

# 📜 Rules of Components

1. Component names must **start with an uppercase letter**  
   Example: `App`, `Login`, `Register`

2. Component files usually have the extension **`.jsx`**

3. Components can be written in two ways:

### Paired Component
```jsx
<App></App>

```
### 🔹 Self-Closing Component

A self-closing component is a React component written without a separate closing tag.

```jsx
<App />

```
---

### 🔹 Types of Components

#### 1️⃣ Class-Based Component (CBC)

Also called a **Stateful Component** because it contains a **state object**.

##### Syntax

```javascript
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <h1>I am CBC</h1>
    );
  }
}

export default App;

```

---

#### 2️⃣ Function-Based Component (FBC)

Also called a **Stateless Component** because it **does not use a state object (in basic usage)**.

##### Using Arrow Function

```javascript
const Number = () => {
  return (
    <h1>I am Number</h1>
  );
};

export default Number;

```

##### Using Named Function

```javascript
function App() {
  return (
    <h1>I am FBC</h1>
  );
}

export default App;

```

---

### 🔹 React Fragments

JSX must return **only one parent element**.

If we want to return **multiple elements**, they must be wrapped inside a parent element.

Sometimes a parent element is **not needed in the UI**. In that case, we use **React Fragments**.

---

#### Using `React.Fragment`

```jsx
<React.Fragment>
  <h1>Element 1</h1>
  <h2>Element 2</h2>
</React.Fragment>

```

#### Using Short Syntax

```jsx
<>
  <h1>Element 1</h1>
  <h2>Element 2</h2>
</>

```

React Fragments allow **grouping multiple elements without adding extra nodes to the DOM**.