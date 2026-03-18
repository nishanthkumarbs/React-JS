# 🔁 Higher Order Components (HOC)

## 📌 What is a Higher Order Component?

- **HOC (Higher Order Component)** is an advanced React pattern.
- It is used to **reuse component logic**.
- HOC is an **alternative to props drilling**.
- It helps to **share common functionality between multiple components**.

### Definition
A **Higher Order Component** is a function that:
- Takes a **component as an argument**
- Returns a **new component**

---

## 🎯 Why use HOC?

- To **avoid code duplication**
- To **share logic between components**
- To **reduce props drilling**
- To keep components **clean and reusable**

---

## 🔹 How HOC Works
HOC(Component) → Enhanced Component

- HOC wraps the original component
- Adds extra functionality
- Returns the updated component

---

## 🧩 Example of HOC

### HOC Component

```jsx
function withMessage(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div>
        <h1>HOC Message</h1>
        <WrappedComponent {...props} />
      </div>
    );
  };
}
```
---

### Child Components

```jsx
function ChildComponentA(props) {
  return <h2>Component A: {props.name}</h2>;
}

function ChildComponentB(props) {
  return <h2>Component B: {props.name}</h2>;
}
```
---

### Export with HOC

```jsx
export default withMessage(ChildComponentA);

```