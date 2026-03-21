# 🔗 React Refs

## 📌 What are Refs?

- **Refs** stand for **references**.
- Refs are used to **access or target a specific DOM element**.
- They directly interact with the **Real DOM**.
- Refs are available in **Class-Based Components (CBC)**.
- In **Function-Based Components (FBC)**, we use the **`useRef()` Hook**.

---

# 🔹 Steps to Use Refs in FBC

1. **Import the `useRef()` hook**
2. **Store `useRef()` in a variable**
3. **Pass the `ref` attribute to a DOM element**

---

## 🧩 Example

```jsx
import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Enter text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
```
---

## 🎯 Practical Usage of Refs

- **Media Tags** (Play/Pause videos, audio)
- **Form Handling** (Access input values directly)
- **Animations** (Trigger animations on elements)

---

## ⚠️ Note

- Avoid overusing **Refs**.
- Prefer **state and props** whenever possible.
- Use Refs only when direct DOM manipulation is required.