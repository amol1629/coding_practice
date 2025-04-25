# React Best Practices Guide

## Table of Contents

* [Introduction](#introduction)
* [Project Structure](#project-structure)
* [Component Patterns](#component-patterns)
* [Naming Conventions](#naming-conventions)
* [State Management](#state-management)
* [Hooks Usage](#hooks-usage)
* [Performance Optimization](#performance-optimization)
* [Code Reusability](#code-reusability)
* [Documentation](#documentation)

## Introduction

This guide outlines industry-standard best practices for React development. Following these guidelines will help you write clean, maintainable, and efficient React code. These practices reflect current industry standards as of 2024 and are applicable to React 18+ projects.

## Project Structure

### Folder Structure

```
src/
├── assets/           # Static files like images, fonts
├── components/       # Reusable components
│   ├── ui/           # UI components like Button, Input, etc.
│   └── layout/       # Layout components like Header, Footer, etc.
├── hooks/            # Custom hooks
├── pages/            # Page components (for routing)
├── services/         # API services, utilities for external communication
├── context/          # React context providers
├── store/            # State management (Redux, Zustand, etc.)
├── utils/            # Utility functions
├── types/            # TypeScript type definitions
├── constants/        # Application constants
├── styles/           # Global styles
├── App.tsx           # Application entry component
└── index.tsx         # Application entry point
```

### Feature-Based Structure (Alternative)

For larger applications, consider a feature-based structure:

```
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── utils/
│   ├── dashboard/
│   │   ├── components/
│   │   └── ...
│   └── ...
├── shared/           # Shared across features
│   ├── components/
│   ├── hooks/
│   └── ...
└── ...
```

### File Organization Principles

1. **Colocate files** : Keep related files close to each other
2. **Single responsibility** : Each file should do one thing well
3. **Encapsulation** : Expose only what's necessary through index files
4. **Consistency** : Apply the same patterns throughout the project

## Component Patterns

### Component Types

1. **Presentational Components (UI Components)**
   * Focus on UI rendering
   * Receive data via props
   * No/minimal state management
   * Highly reusable
2. **Container Components**
   * Handle data fetching and state management
   * Pass data to presentational components
   * Little to no styling
3. **Page Components**
   * Represent entire pages/routes
   * Compose multiple containers/components
   * Handle page-level state and routing
4. **Layout Components**
   * Handle positioning of elements
   * Manage responsive behavior
   * Examples: Grid, Stack, Page layouts
5. **Higher-Order Components (HOCs)**
   * Enhance components with additional functionality
   * Follow the pattern: `withFeature(Component)`
   * Less common in modern React; prefer hooks

### Component Example Structure

```jsx
// Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false
}) => {
  return (
    <button
      className={`button button--${variant} button--${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
```

## Naming Conventions

### Components

* **PascalCase** for component names
* Name should describe its purpose
* File name should match component name
* Examples: `UserProfile.jsx`, `LoginForm.jsx`, `NavigationMenu.jsx`

### Hooks

* Prefix with `use`
* Camel case
* Name should describe their purpose
* Examples: `useAuth`, `useFetchData`, `useWindowSize`

### Props

* Camel case
* Be descriptive but concise
* Boolean props should have "is", "has", "should" prefixes
* Event handlers should start with "on" followed by the event name
* Examples: `userName`, `isActive`, `onSubmit`, `hasError`

### Event Handlers

* Start with "handle" + the event name
* Examples: `handleClick`, `handleSubmit`, `handleInputChange`

### Context

* Suffix with "Context"
* Export provider with "Provider" suffix
* Examples: `UserContext`, `ThemeContext`, `UserContextProvider`

### State Variables

* Descriptive camel case names
* For useState pairs, use `[noun, setNoun]` pattern
* Examples: `[isLoading, setIsLoading]`, `[users, setUsers]`

### Constants

* UPPER_SNAKE_CASE for truly constant values
* Examples: `API_URL`, `MAX_RETRY_COUNT`

### Files and Folders

* Components: PascalCase (`Button.jsx`, `UserProfile/`)
* Hooks, utilities: camelCase (`useAuth.js`, `formatDate.js`)
* Constants: UPPER_SNAKE_CASE or camelCase (`API_ENDPOINTS.js`)
* Test files: Same name as the file they test with `.test` or `.spec` suffix

## State Management

### Local Component State

* Use `useState` for simple component state
* Use `useReducer` for complex state logic

```jsx
// Simple state
const [isOpen, setIsOpen] = useState(false);

// Complex state
const [state, dispatch] = useReducer(reducer, initialState);
```

### Context API

* Use for state that needs to be accessed by multiple components
* Create dedicated context providers
* Keep context focused on specific domains
* Consider splitting contexts to prevent unnecessary re-renders

```jsx
// ThemeContext.jsx
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
```

### State Libraries

* Consider libraries for complex applications:
  * **Redux Toolkit** : For large applications with complex state
  * **Zustand** : Simpler alternative to Redux
  * **Jotai/Recoil** : Atomic state management
  * **React Query/SWR** : For server state

### State Management Best Practices

1. Keep state as local as possible
2. Lift state up only when necessary
3. Separate UI state from domain/application state
4. Use immutable state updates
5. Normalize complex data structures
6. Persist only necessary state

## Hooks Usage

### Built-in Hooks Best Practices

#### useState

```jsx
// ✅ Good: Single responsibility states
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
const [data, setData] = useState(null);

// ✅ Good: Object state with functional updates
const [form, setForm] = useState({ name: '', email: '' });
const updateField = (field, value) => {
  setForm(prev => ({ ...prev, [field]: value }));
};

// ❌ Bad: Derived state
const [items, setItems] = useState([]);
const [itemCount, setItemCount] = useState(0);  // Redundant, derive from items.length
```

#### useEffect

```jsx
// ✅ Good: Specific dependencies
useEffect(() => {
  document.title = `${user.name}'s Profile`;
}, [user.name]); // Only runs when user.name changes

// ✅ Good: Cleanup to prevent memory leaks
useEffect(() => {
  const subscription = subscribeToEvent(handleEvent);
  return () => subscription.unsubscribe();
}, []);

// ❌ Bad: Missing dependencies
useEffect(() => {
  fetchData(userId); // If fetchData or userId is defined outside, it should be in dependencies
}, []); // Missing dependencies
```

#### useRef

```jsx
// ✅ Good: DOM references
const inputRef = useRef(null);
// Later: inputRef.current.focus();

// ✅ Good: Instance variables (values that don't trigger re-renders)
const prevCountRef = useRef(count);
```

#### useMemo and useCallback

```jsx
// ✅ Good: Memoize expensive calculations
const sortedItems = useMemo(() => {
  return [...items].sort((a, b) => a.name.localeCompare(b.name));
}, [items]);

// ✅ Good: Stable callbacks for child components
const handleSubmit = useCallback((values) => {
  saveData(values);
}, [saveData]);
```

### Custom Hooks

* Extract reusable logic into custom hooks
* Follow the "use" prefix naming convention
* Return only what consumers need
* Handle cleanup properly

```jsx
// useLocalStorage.js
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
```

## [Performance Optimization](#performance-optimization)

### Component Optimization

1. **React.memo** for pure functional components
   ```jsx
   const MemoizedComponent = React.memo(MyComponent);
   ```
2. **useMemo** for expensive calculations
   ```jsx
   const sortedList = useMemo(() => {  return [...list].sort(/* expensive sort */);}, [list]);
   ```
3. **useCallback** for stable functions
   ```jsx
   const handleClick = useCallback(() => {  // Handle click}, [dependency]);
   ```
4. **Code splitting** with lazy loading
   ```jsx
   const LazyComponent = React.lazy(() => import('./LazyComponent'));function MyComponent() {  return (    <Suspense fallback={<Spinner />}>      <LazyComponent />    </Suspense>  );}
   ```

### List Rendering

1. **Virtualization** for long lists
   ```jsx
   import { FixedSizeList } from 'react-window';function VirtualizedList({ items }) {  const Row = ({ index, style }) => (    <div style={style}>{items[index]}</div>  );  return (    <FixedSizeList      height={500}      width="100%"      itemCount={items.length}      itemSize={35}    >      {Row}    </FixedSizeList>  );}
   ```
2. **Stable keys** for list items
   ```jsx
   // ✅ Good: Unique, stable IDitems.map(item => <Item key={item.id} {...item} />)// ❌ Bad: Using index as key when list can reorderitems.map((item, index) => <Item key={index} {...item} />)
   ```

### Data Fetching

1. **Caching** and state management
   ```jsx
   // Using React Queryconst { data, isLoading } = useQuery(['users', userId], fetchUserData);
   ```
2. **Debouncing** for input fields
   ```jsx
   function SearchInput() {  const [value, setValue] = useState('');  const debouncedValue = useDebounce(value, 500);  useEffect(() => {    if (debouncedValue) searchApi(debouncedValue);  }, [debouncedValue]);  return <input value={value} onChange={e => setValue(e.target.value)} />;}
   ```

## Code Reusability

### Component Composition

1. **Children prop** for flexible components
   ```jsx
   function Card({ title, children }) {  return (    <div className="card">      <h2>{title}</h2>      <div className="card-content">{children}</div>    </div>  );}
   ```
2. **Render props** for sharing functionality
   ```jsx
   function MouseTracker({ render }) {  const [position, setPosition] = useState({ x: 0, y: 0 });  // Update position...  return render(position);}// Usage<MouseTracker render={pos => <div>Mouse at: {pos.x}, {pos.y}</div>} />
   ```

### Custom Hooks

Create reusable hooks for common patterns:

```jsx
// useForm.js
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    // Validation logic
    callback(values);
  };

  return { values, errors, handleChange, handleSubmit };
}

// Usage
function LoginForm() {
  const { values, handleChange, handleSubmit } = useForm({ email: '', password: '' });

  return (
    <form onSubmit={handleSubmit(loginUser)}>
      <input name="email" value={values.email} onChange={handleChange} />
      <input name="password" value={values.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}
```

### Higher-Order Components (HOCs)

```jsx
// withAuth.jsx
function withAuth(Component) {
  return function WithAuth(props) {
    const { isAuthenticated, user } = useAuth();

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return <Component {...props} user={user} />;
  };
}

// Usage
const ProtectedDashboard = withAuth(Dashboard);
```

### Utility Functions

Create pure, reusable utility functions:

```jsx
// utils/formatters.js
export function formatCurrency(value, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(value);
}

// utils/validators.js
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

## Documentation

### Component Documentation

Use JSDoc comments for components:

```jsx
/**
 * Button component for primary user actions.
 *
 * @component
 * @param {Object} props - Component props
 * @param {'primary'|'secondary'|'tertiary'} [props.variant='primary'] - Button style variant
 * @param {'small'|'medium'|'large'} [props.size='medium'] - Button size
 * @param {Function} [props.onClick] - Click handler function
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @param {React.ReactNode} props.children - Button content
 * @returns {JSX.Element} Button component
 *
 * @example
 * <Button variant="primary" size="medium" onClick={handleClick}>
 *   Click Me
 * </Button>
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  children
}) => {
  // Implementation
};
```

### README File

Each significant component or library should have its own README:

```markdown
# UserProfile Component

A component that displays user information with editable fields.

## Installation

```bash
npm install @myorg/user-profile
```

## Usage

```jsx
import UserProfile from '@myorg/user-profile';

function App() {
  return <UserProfile userId="123" editable={true} />;
}
```

## Props

| Prop     | Type    | Default  | Description                  |
| -------- | ------- | -------- | ---------------------------- |
| userId   | string  | Required | ID of the user to display    |
| editable | boolean | false    | Whether fields can be edited |

```

```
