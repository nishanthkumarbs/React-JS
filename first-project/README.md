# This My First Project

# ⚛️ React JS Notes

## 📌 What is React JS?
**React JS** is a **JavaScript Library** used to build **Single Page Applications (SPA)**.

### Definitions
- **Code:** A set of instructions written by a developer.
- **Library:** A collection of predefined code that can be reused.  
  **Examples:** jQuery, React JS
- **Framework:** A collection of multiple libraries used to build applications.  
  **Examples:** Angular JS, Express JS, Next JS

---

# 📜 History of React JS
- **2011:** React JS was developed by **Jordan Walke** at **Facebook**.
- **2011:** First used in a **Facebook application**.
- **2012:** Used in the **Instagram application**.
- **2013:** React JS was released as **Open Source**.

---

# 🚀 Features / Characteristics of React JS
- React JS is **Open Source**.
- Used to build **Single Page Applications (SPA)**.
- It is a **JavaScript Library**.
- React follows **Unidirectional (One-way) Data Binding**.

### Note
Data can be sent **from parent to child**, but **not from child to parent directly**.

- React is **Declarative** in nature.
- Uses **Virtual DOM**.
- Follows **Component-Based Architecture**.
- **Learn Once, Write Anywhere** philosophy.

### Component-Based Architecture
Breaking large pages into **small reusable components**.

---

# ✅ Advantages of React JS
- Faster performance due to **Virtual DOM**
- **Reusable components**
- Easy to **maintain and scale**
- Strong **community support**
- Suitable for **large web applications**

---

# ⚙️ React JS Installation

React can be installed in **three ways**:

1. **CLI (Command Line Interface)**
2. **create-react-app**
3. **Vite**

### Important Tools
- **npm (Node Package Manager):** Used to manage packages.
- **npx (Node Package Executor):** Used to run packages.

---

# 🌐 Virtual DOM vs Real DOM

## Real DOM
- The **actual DOM** that users see in the browser.
- Updating Real DOM frequently can slow down applications.

## Virtual DOM
- A **copy (clone)** of the Real DOM maintained by React.
- React first updates the **Virtual DOM**, then updates the **Real DOM** efficiently.

---

# 🔍 Diffing
- React compares **Virtual DOM** with **Real DOM**.
- If differences are found, React updates only the changed parts.
- This process is called **Diffing**.
- The algorithm used is called the **Diffing Algorithm**.
- React can update **~200,000 nodes per second**.

---

# 🔄 Reconciliation
Reconciliation is the process where React:

1. Compares **Virtual DOM** with **Real DOM**
2. Finds differences using the **Diffing Algorithm**
3. Updates the **Real DOM**

### Reconciliation depends on:
- Virtual DOM
- Diffing Algorithm

---

# 🩹 Patching
Updating missing or changed nodes in the DOM is called **Patching**.

---

# 📂 React Project Folder Structure

---

Project
│
├── node_modules
├── public
├── src
│
├── main.jsx
├── App.jsx
├── global.css
│
├── package.json
├── package-lock.json
│
└── index.html

---


### Important Files

- **main.jsx** → Root element of the application
- **App.jsx** → Parent component / Top-level component
- **index.html** → Entry point of the application

---

# 📚 React Libraries

## 1️⃣ React Library
- Maintains **components, state, and event handling**.
- Core library of React.

```javascript
import React from "react";

```

### 2️⃣ React DOM

React DOM is responsible for **rendering React components to the browser's UI (DOM)**.

```javascript
import ReactDOM from "react-dom/client";

```
### 🔧 Important Methods

#### createRoot()

`createRoot()` acts as a **bridge between `index.html` and `main.jsx`** and creates a root where the React app will be rendered.

```javascript
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

```

#### render()

`render()` is used to **display data on the UI**.

The `render()` method can accept:

- Strings  
- JSX elements  
- Components  

```javascript
root.render(<App />);

```

### 🖥️ Rendering Examples

#### Rendering a Component

```javascript
createRoot(document.getElementById("root")).render(
  <App />
);

```

#### Rendering JSX

```javascript
createRoot(document.getElementById("root")).render(
  <h1>Hello All</h1>
);

```

#### Rendering a String

```javascript
createRoot(document.getElementById("root")).render(
  "Good Morning All"
);

```

### 📦 Installing Node Modules

```bash
npm install

```