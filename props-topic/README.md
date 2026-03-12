# 📦 React Props

## 📌 What are Props?

- **Props** stands for **Properties**.
- Props are **objects** used in React.
- Props are used to **transfer data from one component to another**.
- Data is usually passed from **Parent Component → Child Component**.
- Props are available in **both Class-Based Components and Function-Based Components**.
- Props are passed using **attributes**.
- Props are **immutable (read-only)**, meaning they **cannot be modified**.

---

## 🔹 Example of Props

### Parent Component

```jsx
function App() {
  return <User name="Nishanth" age={22} />;
}

export default App;
```
---

### 🔹 Child Component

A **Child Component** receives data from a parent component using **props**.

```javascript
function User(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
    </div>
  );
}

export default User;
```

---

### 🔁 Props Drilling

**Props Drilling** is the process of passing data from one component to another through multiple intermediate components, even if those intermediate components do not need the data.

#### Example Flow
App → Parent → Child → GrandChild

Here the data is passed through several components until it reaches the **final component**.

---

#### ❗ Problem with Props Drilling

- Makes code **complex**
- **Difficult to maintain**
- Intermediate components receive **props they don't use**

---

#### ✅ Solution for Props Drilling

To avoid **props drilling**, React provides:

- **Context API**
- **Redux / State Management Libraries**

These allow components to **access data directly without passing through multiple intermediate components**.