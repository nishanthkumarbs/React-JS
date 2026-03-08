## 📘 JSX (JavaScript XML)

**JSX** stands for **JavaScript XML**. It allows us to write HTML-like syntax inside JavaScript, making it easier to create and manage UI components in React.

### 🔹 What is JSX?

- JSX = **JavaScript + XML**
- It is a **combination of HTML and JavaScript**.
- JSX acts as a **template language** for React.
- JSX looks similar to **HTML**, but it is **not HTML**.
- **React.js commonly uses JSX** to define UI components.
- JSX is a **case-sensitive language**.

---

## 📜 Rules of JSX

- JSX must **return a single root element**.
- JSX elements are **case-sensitive**.
- We can write **JavaScript expressions inside JSX** using `{ }`.
- Some **JavaScript/HTML keywords are different in JSX**.

### 🔄 Keyword Differences

| HTML Attribute | JSX Attribute |
|----------------|---------------|
| `class`        | `className`   |
| `for`          | `htmlFor`     |

---

### ⚙️ JSX Syntax Rules

- JSX attributes must follow **lower camelCase** naming.
- Every JSX element must have a **closing tag**.

Example:

```jsx
function App() {
  return (
    <div className="container">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
    </div>
  );
}

export default App;