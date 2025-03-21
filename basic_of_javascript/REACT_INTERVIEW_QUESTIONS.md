# What is React?

* *React is a popular open-source JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications (SPAs). It allows developers to create reusable UI components and manage the state of their applications efficiently.*
* React follows a component-based architecture, making it easier to build complex UIs by breaking them down into smaller, manageable pieces.

# What is JSX?

* JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code.
* It is not mandatory to use JSX in React, but it makes the code more readable and easier to write. JSX gets transpiled into regular JavaScript by tools like Babel before being executed in the browser.

# React Hooks Overview

Here is a list of all the built-in React hooks along with their official documentation links:

## Basic Hooks

* [useState](#1-usestate-hook "useState Hook")
* [useEffect](#2-useeffect-hook "useEffect Hook")
* [useContext](#3-usecontext-hook "useContext Hook")

## Additional Hooks

* [useReducer](https://react.dev/reference/react/useReducer)
* [useCallback](https://react.dev/reference/react/useCallback)
* [useMemo](https://react.dev/reference/react/useMemo)
* [useRef](https://react.dev/reference/react/useRef)
* [useImperativeHandle](https://react.dev/reference/react/useImperativeHandle)
* [useLayoutEffect](https://react.dev/reference/react/useLayoutEffect)
* [useDebugValue](https://react.dev/reference/react/useDebugValue)
* [useDeferredValue](https://react.dev/reference/react/useDeferredValue)
* [useTransition](https://react.dev/reference/react/useTransition)
* [useId](https://react.dev/reference/react/useId)
* [useSyncExternalStore](https://react.dev/reference/react/useSyncExternalStore)

---

# [1) useState Hook](#1-usestate-hook "useState Hook")

## Introduction

The `useState` hook is a fundamental React Hook that allows functional components to manage state. Introduced in React 16.8, it replaces the need for class components when dealing with state management.

## Syntax

```javascript
const [state, setState] = useState(initialState);
```

- `state`: The current state value.
- `setState`: A function to update the state.
- `initialState`: The default value of the state (can be a primitive, object, array, or function).

## Example Usage

### 1. Basic Example (Counter)

```javascript
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default Counter;
```

## Updating State

### 2. Using Previous State

When updating the state based on the previous value, use a function inside `setState` to ensure correctness:

```javascript
setCount(prevCount => prevCount + 1);
```

### 3. Updating Objects in State

If state is an object, spread the existing state to retain other properties:

```javascript
const [user, setUser] = useState({ name: 'John', age: 25 });

setUser(prevUser => ({ ...prevUser, age: 26 }));
```

### 4. Updating Arrays in State

To update an array, spread the existing array and add new items:

```javascript
const [items, setItems] = useState([1, 2, 3]);

setItems(prevItems => [...prevItems, 4]);
```

## Lazy Initialization

If the initial state is computationally expensive, pass a function to `useState`:

```javascript
const [count, setCount] = useState(() => {
    console.log('Expensive computation');
    return 0;
});
```

This function runs only on the first render, improving performance.

## Rules of useState

1. **Only call `useState` at the top level** – Do not use it inside loops, conditions, or nested functions.
2. **Only use inside React components** – Hooks must be used in functional components or custom hooks.
3. **State updates are asynchronous** – React batches multiple state updates to optimize performance.

## Common Pitfalls

### 1. Directly Modifying State

Avoid modifying state directly:

```javascript
// ❌ Wrong
user.age = 30;
setUser(user);
```

Instead, use:

```javascript
// ✅ Correct
setUser(prevUser => ({ ...prevUser, age: 30 }));
```

### 2. Not Preserving Previous State

For objects and arrays, always spread the previous state:

```javascript
setItems(prevItems => [...prevItems, newItem]);
```

## Conclusion

The `useState` hook is a powerful way to manage local state in functional components. Understanding its nuances helps in writing efficient and bug-free React applications.

---

# [2) useEffect Hook](#2-useeffect-hook "useEffect Hook")

`useEffect` is a fundamental hook in React that allows you to perform side effects in function components. It serves as a replacement for lifecycle methods such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.

## Syntax

```jsx
import { useEffect } from 'react';

useEffect(() => {
  // Side effect logic here
  return () => {
    // Cleanup logic (optional)
  };
}, [dependencies]);
```

## Parameters

* **Effect function** : A function containing the side effect logic.
* **Cleanup function (optional)** : A function that cleans up effects (like removing event listeners, canceling API calls, etc.).
* **Dependency array (optional)** : Specifies when the effect should re-run.

## How useEffect Works

### 1. Running on Every Render (No Dependency Array)

If you don’t pass a dependency array, `useEffect` will execute after every render.

```jsx
useEffect(() => {
  console.log('Effect runs after every render');
});
```

### 2. Running Only Once (Empty Dependency Array)

If you pass an empty array, the effect runs only once, similar to `componentDidMount`.

```jsx
useEffect(() => {
  console.log('Effect runs only once');
}, []);
```

### 3. Running on Dependency Change

If you provide dependencies, the effect will re-run whenever any dependency changes.

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`Count changed: ${count}`);
}, [count]);
```

### 4. Cleanup Function

If an effect needs cleanup (e.g., event listeners, subscriptions, or intervals), return a function inside `useEffect`.

```jsx
useEffect(() => {
  const handleResize = () => {
    console.log('Window resized');
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

## Common Use Cases

* Fetching data from an API
* Subscribing to events (e.g., WebSocket, DOM events)
* Setting up intervals or timeouts
* Updating the document title
* Managing animations

## Best Practices

* **Always clean up side effects** to prevent memory leaks.
* **Use dependencies wisely** to avoid unnecessary re-renders.
* **Avoid async directly in `useEffect`** ; use an inner async function instead.
* **Batch state updates** inside `useEffect` if needed.

## Example: Fetching Data with useEffect

```jsx
import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : data.map(post => <p key={post.id}>{post.title}</p>)}
    </div>
  );
};

export default DataFetcher;
```

## Conclusion

The `useEffect` is an essential tool for handling side effects in React function components. By understanding how it works and following best practices, you can efficiently manage component lifecycle events and side effects.

---



## [3) useContext Hook](#3-usecontext-hook "useContext Hook")

## Introduction

The `useContext` hook is a built-in React hook that allows functional components to subscribe to context changes. It provides a way to pass data through the component tree without having to pass props manually at every level.

## Why useContext?

In large applications, prop drilling (passing props from parent to child repeatedly) becomes difficult to manage. The `useContext` hook helps avoid prop drilling by enabling components to directly access context values without explicitly passing them as props.

## Syntax

```jsx
const value = useContext(MyContext);
```

* **`MyContext`** : The context object created using `React.createContext()`.
* **Returns** : The current context value.

## Creating and Using Context with useContext

### 1. Create a Context

```jsx
import React, { createContext } from 'react';

const ThemeContext = createContext("light");
```

### 2. Provide Context Value

Wrap the component tree with the `Provider` and pass the context value.

```jsx
import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import ChildComponent from './ChildComponent';

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <ChildComponent />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
    </ThemeContext.Provider>
  );
}

export default App;
```

### 3. Consume Context with useContext

```jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ChildComponent() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      Current Theme: {theme}
    </div>
  );
}

export default ChildComponent;
```

## When to Use useContext

* **Global state management** : When a piece of state is required by multiple components.
* **Avoiding prop drilling** : If a deeply nested component needs access to state without passing it through intermediate components.
* **Sharing themes, authentication, or localization settings** .

## Limitations of useContext

* Not ideal for frequently updating state (e.g., complex global state management). In such cases, consider **Redux** or  **useReducer** .
* Every re-render of the provider triggers all consumer components to re-render, even if the value hasn’t changed.

## Optimizing useContext Performance

* **Memoize Context Value** : To prevent unnecessary re-renders, use `useMemo`:

```jsx
import React, { createContext, useState, useMemo } from 'react';

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <ChildComponent />
    </ThemeContext.Provider>
  );
}
```

* **Use Separate Contexts** : If different state values don’t depend on each other, create multiple contexts instead of a single one.

## Alternative: useContext with useReducer

For better state management, combine `useContext` with `useReducer`:

```jsx
import React, { useReducer, createContext, useContext } from 'react';

const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};

function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(themeReducer, "light");
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ChildComponent() {
  const { theme, dispatch } = useContext(ThemeContext);
  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>Toggle Theme</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ChildComponent />
    </ThemeProvider>
  );
}

export default App;
```

## Conclusion

The `useContext` hook is a powerful tool for managing global state and avoiding prop drilling. However, it should be used carefully to prevent unnecessary re-renders. For more complex state management, `useReducer` or external state management libraries like Redux may be better choices.

---
