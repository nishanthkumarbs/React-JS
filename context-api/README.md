# 🌐 React Context API

## 📌 What is Context API?

- **Context API** is a feature in React used to **share data between components**.
- It allows components to **access data directly without passing props through intermediate components**.

### Definition
**Context API** is a method of **sharing data between components without using intermediate components**.

---

## 🎯 Why Context API?

Context API helps to **avoid Props Drilling**.

Instead of passing data through many components like this:

App → Parent → Child → GrandChild


We can use **Context API** so components can access the data directly.

---

## 🔹 Basic Steps to Use Context API

1. **Create Context**
2. **Provide Context**
3. **Consume Context**

---

## 🧩 Example

### Create Context
```jsx
import { createContext } from "react";

export const UserContext = createContext();

```

---

### Provide Context

```jsx
<UserContext.Provider value="Nishanth">
  <Child />
</UserContext.Provider>
```

---

### Consume Context

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Child() {
  const user = useContext(UserContext);

  return <h1>{user}</h1>;
}
```