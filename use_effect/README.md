# useEffect in React

## What is it?

`useEffect` runs code after the component renders. It is used for side effects like fetching data, timers, or updating the page title.

**Real-life idea:** You enter a room (component loads) and switch on the lights (run code). You leave the room (component removed) and switch off the lights (cleanup).

## The Pattern

```jsx
useEffect(() => {
  // code to run
}, [dependencies]);
```

- No array → runs after every render
- `[]` → runs only once, when the component loads
- `[value]` → runs when `value` changes

---

## Examples

### 1. Fetch data once when the page loads


### 2. Update page title when a value changes

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### 3. Timer with cleanup

```jsx
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer); // cleanup
  }, []);

  return <p>{time.toLocaleTimeString()}</p>;
}
```

### 4. Run code when search text changes

```jsx
function Search() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query === "") return;
    console.log("Searching for:", query);
  }, [query]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}
```

---

## Dependency Array Cheat Sheet

| Array | Runs |
|---|---|
| none | After every render |
| `[]` | Once, when the component loads |
| `[value]` | Whenever `value` changes |

## Cleanup Function

Return a function from `useEffect` to clean up before the component unmounts or before the effect runs again. Used for timers, subscriptions, and event listeners.

```jsx
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  return () => clearInterval(timer);
}, []);
```

## Run

```bash
npm create vite@latest demo -- --template react
cd demo
npm install
npm run dev
```