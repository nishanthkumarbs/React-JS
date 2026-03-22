# UseEffect and Axios Guide

## UseEffect

**UseEffect** is a Hook available in function-based components that allows you to control side effects in your React component.

### What are Side Effects?
Side effects can include:
- Fetching data
- Updating something on the DOM
- Setting timers

### Syntax
UseEffect takes two parameters:

```javascript
useEffect(() => {
  // Arrow Function - side effect logic here
}, [dependency]); // Dependency Array
```

### Parameters:
1. **Arrow Function** - Contains the side effect logic to be executed
2. **Dependency Array** - Controls when the effect runs (optional)

---

## Axios

**Axios** is used in React JS to fetch and manage data from the backend.

### Axios Methods

Axios provides 4 main HTTP methods:

| Method | Purpose |
|--------|---------|
| **Get** | Fetch data from the backend |
| **Post** | Insert/Create new data |
| **Put** | Update existing data |
| **Delete** | Remove data |

### Example Usage:
```javascript
import axios from 'axios';

// GET
axios.get('/api/data');

// POST
axios.post('/api/data', { /* data */ });

// PUT
axios.put('/api/data/1', { /* updated data */ });

// DELETE
axios.delete('/api/data/1');
```