# 📝 React Forms

## 📌 What are Forms?

- Forms are used to **collect user input** in web applications.
- In React, forms are handled using **state** to control input values.
- Common form elements:
  - Input fields
  - Textarea
  - Select dropdown
  - Buttons

---

# 🔹 Controlled Components

- In React, form elements are usually **controlled components**.
- This means form data is handled by **React state**.

## Example

```jsx
import React, { useState } from "react";

function FormExample() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <h2>{name}</h2>
    </div>
  );
}

export default FormExample;

```
---

### 🔹 Handling Multiple Inputs

```jsx
import React, { useState } from "react";

function FormExample() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
    </div>
  );
}
```
---

### 🔹 Form Submission

```jsx
import React, { useState } from "react";

function FormSubmit() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

```
---

### 🔹 Uncontrolled Components

- In uncontrolled components, form data is handled using **refs** instead of state.

#### Example

```jsx
import React, { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```