# What is React?

* React is a popular open-source JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications (SPAs). It allows developers to create reusable UI components and manage the state of their applications efficiently.
* React follows a component-based architecture, making it easier to build complex UIs by breaking them down into smaller, manageable pieces.

# What is JSX?

* JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code.
* It is not mandatory to use JSX in React, but it makes the code more readable and easier to write. JSX gets transpiled into regular JavaScript by tools like Babel before being executed in the browser.

# React Hooks Overview

Here is a list of all the built-in React hooks along with their official documentation links:

## Introduction

## Basic Hooks

* [useState](#usestate)
* [useEffect](#useeffect-hook)
* [useContext](https://react.dev/reference/react/useContext)

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

## [2) useEffect Hook](#useeffect-hook)

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

---
