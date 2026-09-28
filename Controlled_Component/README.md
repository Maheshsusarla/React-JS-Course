# Controlled Components in React

## What is it?

An input box whose value is stored in React state. React holds the data, and the box only shows it.

## Why use it?

- Login button stays disabled until fields are filled
- PAN card box turns `abc` into `ABC`
- Swiggy search filters the list as you type

## How to write it

Three things:

1. A state to store the value
2. `value` to show it in the box
3. `onChange` to update it when the user types

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}</p>
    </div>
  );
}

export default App;
```

## One state and one handleChange for many inputs

Use the `name` attribute to tell React which field to update.

```jsx
import { useState } from "react";

function App() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button onClick={() => setShow(true)}>Submit</button>

      {show && (
        <p>
          {form.email} / {form.password}
        </p>
      )}
    </div>
  );
}

export default App;
```

The `name` attribute must match the key in state.

## Common mistake

```jsx
// Wrong: input is locked, you cannot type
<input value={name} />

// Correct
<input value={name} onChange={(e) => setName(e.target.value)} />
```

## Run

```bash
npm create vite@latest demo -- --template react
cd demo
npm install
npm run dev
```
