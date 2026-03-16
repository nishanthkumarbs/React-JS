# 🎨 React CSS

## 📌 What is React CSS?

- **React CSS** is used to apply **styling effects to web pages**.
- **CSS (Cascading Style Sheets)** is used to add **colors, layout, and visual effects** to web pages.
- CSS was introduced by **Håkon Wium Lie**.

---

# 🧩 Ways to Add CSS in React

In React, CSS can be applied in **three different ways**:

## 1️⃣ Inline CSS
CSS is applied **directly inside JSX elements** using the `style` attribute.

```jsx
function App() {
  return (
    <h1 style={{ color: "blue", textAlign: "center" }}>
      Hello React
    </h1>
  );
}

export default App;
```
---

## 2️⃣ Global CSS

CSS is written in a **separate `.css` file** and imported into the component.

### Example

#### global.css
```css
h1 {
  color: red;
  text-align: center;
}

```
---

### App.jsx

```jsx
import "./global.css";

function App() {
  return <h1>Hello React</h1>;
}

export default App;
```

---

# 🎨 CSS Frameworks Used in React

CSS frameworks provide **pre-built components and styling utilities** that help developers build UI faster and maintain consistency.

## 🔹 Popular CSS Frameworks

### 1️⃣ Material UI
- A popular React UI framework that follows **Google’s Material Design** guidelines.
- Provides ready-to-use **React components** like buttons, cards, dialogs, and forms.

Example installation:

```bash
npm install @mui/material @emotion/react @emotion/styled
```
---

### 2️⃣ Bootstrap

- One of the most widely used **CSS frameworks**.
- Provides **responsive layouts, components, and utility classes**.

#### Example Installation

```bash
npm install bootstrap
```

#### Import Bootstrap in your project

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```
---

### 3️⃣ Tailwind CSS

- A **utility-first CSS framework** used for rapidly building custom UI.
- Instead of predefined components, it provides **utility classes**.

#### Example Installation

```bash
npm install -D tailwindcss
```
#### Example Usage

```html
<h1 class="text-blue-500 text-center text-2xl">
  Hello Tailwind
</h1>
```