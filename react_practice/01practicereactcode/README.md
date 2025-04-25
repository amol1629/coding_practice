# React Best Practices Guide

## Table of Contents

* [Introduction](https://claude.ai/chat/0e851027-5587-4b90-b197-ef0966d4d6c5#introduction)
* [Project Structure](https://claude.ai/chat/0e851027-5587-4b90-b197-ef0966d4d6c5#project-structure)
* [Component Patterns](https://claude.ai/chat/0e851027-5587-4b90-b197-ef0966d4d6c5#component-patterns)
* [Naming Conventions](https://claude.ai/chat/0e851027-5587-4b90-b197-ef0966d4d6c5#naming-conventions)
* [State Management](https://claude.ai/chat/0e851027-5587-4b90-b197-ef0966d4d6c5#state-management)
* [Hooks Usage](https://claude.ai/chat/0e851027-5587-4b90-b197-ef0966d4d6c5#hooks-usage)
* [Performance Optimization](https://claude.ai/chat/0e851027-5587-4b90-b197-ef0966d4d6c5#performance-optimization)
* [Code Reusability](https://claude.ai/chat/0e851027-5587-4b90-b197-ef0966d4d6c5#code-reusability)
* [Testing](https://claude.ai/chat/0e851027-5587-4b90-b197-ef0966d4d6c5#testing)
* [Styling](https://claude.ai/chat/0e851027-5587-4b90-b197-ef0966d4d6c5#styling)
* [Accessibility](https://claude.ai/chat/0e851027-5587-4b90-b197-ef0966d4d6c5#accessibility)
* [TypeScript Integration](https://claude.ai/chat/0e851027-5587-4b90-b197-ef0966d4d6c5#typescript-integration)
* [Error Handling](https://claude.ai/chat/0e851027-5587-4b90-b197-ef0966d4d6c5#error-handling)
* [Security Best Practices](https://claude.ai/chat/0e851027-5587-4b90-b197-ef0966d4d6c5#security-best-practices)
* [Documentation](https://claude.ai/chat/0e851027-5587-4b90-b197-ef0966d4d6c5#documentation)
* [Conclusion](https://claude.ai/chat/0e851027-5587-4b90-b197-ef0966d4d6c5#conclusion)

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

## Performance Optimization

### Component Optimization

1. **React.memo** for pure functional components
   ```jsx
   const MemoizedComponent = React.memo(MyComponent);
   ```
2. **useMemo** for expensive calculations
   ```jsx
   const sortedList = useMemo(() => {
     return [...list].sort(/* expensive sort */);
   }, [list]);
   ```
3. **useCallback** for stable functions
   ```jsx
   const handleClick = useCallback(() => {
     // Handle click
   }, [dependency]);
   ```
4. **Code splitting** with lazy loading
   ```jsx
   const LazyComponent = React.lazy(() => import('./LazyComponent'));

   function MyComponent() {
     return (
       <Suspense fallback={<Spinner />}>
         <LazyComponent />
       </Suspense>
     );
   }
   ```

### List Rendering

1. **Virtualization** for long lists
   ```jsx
   import { FixedSizeList } from 'react-window';

   function VirtualizedList({ items }) {
     const Row = ({ index, style }) => (
       <div style={style}>{items[index]}</div>
     );

     return (
       <FixedSizeList
         height={500}
         width="100%"
         itemCount={items.length}
         itemSize={35}
       >
         {Row}
       </FixedSizeList>
     );
   }
   ```
2. **Stable keys** for list items
   ```jsx
   // ✅ Good: Unique, stable ID
   items.map(item => <Item key={item.id} {...item} />)

   // ❌ Bad: Using index as key when list can reorder
   items.map((item, index) => <Item key={index} {...item} />)
   ```

### Data Fetching

1. **Caching** and state management
   ```jsx
   // Using React Query
   const { data, isLoading } = useQuery(['users', userId], fetchUserData);
   ```
2. **Debouncing** for input fields
   ```jsx
   function SearchInput() {
     const [value, setValue] = useState('');
     const debouncedValue = useDebounce(value, 500);

     useEffect(() => {
       if (debouncedValue) searchApi(debouncedValue);
     }, [debouncedValue]);

     return <input value={value} onChange={e => setValue(e.target.value)} />;
   }
   ```

## Code Reusability

### Component Composition

1. **Children prop** for flexible components
   ```jsx
   function Card({ title, children }) {
     return (
       <div className="card">
         <h2>{title}</h2>
         <div className="card-content">{children}</div>
       </div>
     );
   }
   ```
2. **Render props** for sharing functionality
   ```jsx
   function MouseTracker({ render }) {
     const [position, setPosition] = useState({ x: 0, y: 0 });

     // Update position...

     return render(position);
   }

   // Usage
   <MouseTracker render={pos => <div>Mouse at: {pos.x}, {pos.y}</div>} />
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

## Testing

### Component Testing

```jsx
// Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDisabled();
  });
});
```

### Hook Testing

```jsx
// useCounter.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

describe('useCounter', () => {
  test('initial value is set correctly', () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });

  test('increment increases count by 1', () => {
    const { result } = renderHook(() => useCounter(0));
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
});
```

### Testing Best Practices

1. Test behavior, not implementation
2. Use data-testid attributes when necessary
3. Write meaningful assertions
4. Test edge cases and error conditions
5. Use snapshot testing sparingly
6. Mock external dependencies

## Styling

### CSS-in-JS

```jsx
// Using styled-components
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'white'};
  color: ${props => props.primary ? 'white' : 'blue'};
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid blue;

  &:hover {
    opacity: 0.8;
  }
`;

// Usage
<Button primary>Primary Button</Button>
<Button>Secondary Button</Button>
```

### CSS Modules

```jsx
// Button.module.css
.button {
  padding: 8px 16px;
  border-radius: 4px;
}

.primary {
  background-color: blue;
  color: white;
}

// Button.jsx
import styles from './Button.module.css';

function Button({ primary, children }) {
  return (
    <button className={`${styles.button} ${primary ? styles.primary : ''}`}>
      {children}
    </button>
  );
}
```

### Utility-First CSS (Tailwind)

```jsx
function Button({ primary, children }) {
  return (
    <button className={`px-4 py-2 rounded ${
      primary ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'
    }`}>
      {children}
    </button>
  );
}
```

### Styling Best Practices

1. Consider component-scoped styling (CSS Modules, CSS-in-JS)
2. Create a design system with consistent variables
3. Use responsive design principles
4. Consider accessibility in your styling
5. Avoid inline styles except for dynamic values

## Accessibility

### Basic Principles

1. Semantic HTML elements
   ```jsx
   // ✅ Good
   <button onClick={handleClick}>Click me</button>

   // ❌ Bad
   <div onClick={handleClick} role="button">Click me</div>
   ```
2. Proper labels and ARIA attributes
   ```jsx
   <label htmlFor="name">Name</label>
   <input
     id="name"
     aria-describedby="name-error"
     aria-invalid={hasError}
   />
   {hasError && <span id="name-error">Please enter a valid name</span>}
   ```
3. Keyboard navigation
   ```jsx
   function AccessibleButton({ onClick, children }) {
     const handleKeyDown = (e) => {
       if (e.key === 'Enter' || e.key === ' ') {
         onClick();
       }
     };

     return (
       <div
         role="button"
         tabIndex={0}
         onClick={onClick}
         onKeyDown={handleKeyDown}
       >
         {children}
       </div>
     );
   }
   ```
4. Focus management
   ```jsx
   function Modal({ isOpen, onClose, children }) {
     const modalRef = useRef(null);

     useEffect(() => {
       if (isOpen) {
         modalRef.current?.focus();
       }
     }, [isOpen]);

     return isOpen ? (
       <div
         ref={modalRef}
         role="dialog"
         aria-modal="true"
         tabIndex={-1}
       >
         {children}
         <button onClick={onClose}>Close</button>
       </div>
     ) : null;
   }
   ```

### Accessibility Checklist

1. Use semantic HTML elements
2. Provide text alternatives for non-text content
3. Ensure color is not the only means of conveying information
4. Maintain sufficient color contrast
5. Make all functionality available from a keyboard
6. Help users navigate and find content
7. Make text readable and understandable
8. Make content appear and operate in predictable ways
9. Test with screen readers

## TypeScript Integration

### Basic Component Types

```tsx
// Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  children
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

export default Button;
```

### Hooks with TypeScript

```tsx
// useLocalStorage.ts
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
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

### Type Definitions

```tsx
// types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  preferences?: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  notifications: boolean;
}

// Using the types
function UserProfile({ user }: { user: User }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

### TypeScript Best Practices

1. Define explicit return types for non-trivial functions
2. Use type inference for simple functions
3. Prefer interfaces for public APIs, types for complex types
4. Use generics for reusable components and hooks
5. Create a `types` folder for shared type definitions
6. Use discriminated unions for state management
7. Avoid `any` type - use `unknown` if necessary

## Error Handling

### Error Boundaries

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    // Log to error reporting service
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

// Usage
<ErrorBoundary fallback={<ErrorPage />}>
  <MyComponent />
</ErrorBoundary>
```

### API Error Handling

```jsx
function ProductPage({ productId }) {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchProductById(productId);
        setProduct(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch product');
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [productId]);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return <NotFound />;

  return <ProductDetails product={product} />;
}
```

### Form Validation

```jsx
function SignupForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={form.email}
          onChange={(e) => setForm({...form, email: e.target.value})}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({...form, password: e.target.value})}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
}
```

## Security Best Practices

1. **Prevent XSS** by avoiding `dangerouslySetInnerHTML`
   ```jsx
   // ❌ Bad: Vulnerable to XSS
   <div dangerouslySetInnerHTML={{ __html: userProvidedContent }} />

   // ✅ Good: Use libraries for sanitization
   import DOMPurify from 'dompurify';
   <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userProvidedContent) }} />
   ```
2. **Secure forms and inputs**
   ```jsx
   // Validate and sanitize user input
   const sanitizedInput = DOMPurify.sanitize(userInput.trim());
   ```
3. **Use HTTPS for all requests**
   ```jsx
   // .env file
   REACT_APP_API_URL=https://api.example.com
   ```
4. **Implement proper authentication**
   ```jsx
   // Secure token storage in httpOnly cookies
   // Use CSRF protection
   // Implement proper logout
   ```
5. **Avoid exposing sensitive information**
   ```jsx
   // ❌ Don't expose API keys in client-side code
   const API_KEY = 'secret_key'; // Dangerous!

   // ✅ Use environment variables and backend proxies
   const apiUrl = process.env.REACT_APP_API_URL;
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


---

---
