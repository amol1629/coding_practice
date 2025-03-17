/**
 *  * REACT INTERVIEW QUESTIONS : 
 *  
 *  1) What is React?
 *      - React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
 *      - It lets you compose complex UIs from small and isolated pieces of code called "components".
 *      - React has a few different kinds of components, but we'll start with React.Component subclasses:
 *      
 * 
 *  2) What is JSX?
 *      - JSX is a syntax extension for JavaScript that looks similar to XML or HTML.
 *      - JSX is used with React to describe what the UI should look like.
 *      - JSX produces React "elements".
 *      - JSX makes your code more readable and easier to understand.
 *      - JSX is an expression too, so you can use it inside if statements and for loops, assign it to variables, accept it as arguments, and return it from functions.    
 * 
 *  3) What is the difference between state and props in React?
 *      - Props are arguments passed into React components.
 *      - State is data that changes over time.
 *      - Props are immutable, while state is mutable.
 *      - Both props and state trigger updates to the UI.
 *      - State is managed within the component, while props are passed into the component.
 *      - State is used for internal component data that changes, while props are used for external data that is passed into the component.
 *      - State is initialized in the constructor, while props are passed to the constructor.
 * 
 *  4) What is the difference between a functional component and a class component?
 *      - Functional components are simpler and easier to read than class components.
 *      - Functional components are lightweight and easy to test.
 *      - Functional components use functional programming concepts like pure functions.
 *      - Functional components do not have access to lifecycle methods.
 *      - Class components have more features like state and lifecycle methods.
 *      - Class components can have a constructor, while functional components cannot.
 *      - Class components can have internal state, while functional components cannot.
 *      - Functional components are the preferred way to write components in React.
 *      - Class components are being phased out in favor of functional components.
 * 
 *  5) What is the purpose of the render method in a React component?
 *      - The render method is a required method in a React component.
 *      - The render method returns a React element that represents the UI of the component.
 *      - The render method is called each time the component is updated.
 *      - The render method should be a pure function that does not modify component state.
 *      - The render method should return the same output for the same input every time it is called.
 *      - The render method should not have side effects like modifying external state or performing I/O operations.
 *      - The render method should not rely on mutable external state.
 *      - The render method should be idempotent, meaning it should not have any side effects when called multiple times with the same input.
 *      - The render method should be fast and efficient to keep the UI responsive.
 * 
 *  6) What is the purpose of the useState hook in React?
 *      - The useState hook is a function that allows functional components to have state.
 *      - The useState hook returns a state variable and a function to update that state variable.
 *      - The useState hook takes an initial state value as an argument.
 *      - The useState hook can be called multiple times in a functional component to manage multiple state variables.   
 *      - The useState hook is used to add state to functional components, which were previously stateless.
 *      - The useState hook is part of the React Hooks API, which allows functional components to use state and other React features without writing a class component.
 *      - The useState hook is a powerful tool for managing state in functional components and simplifying the development of React applications.
 *      
 * 
 *  7) What is the purpose of the useEffect hook in React?
 *      - The useEffect hook is a function that allows functional components to perform side effects.
 *      - The useEffect hook is called after the component has rendered and updated.
 *      - The useEffect hook takes a callback function as an argument.
 *      - The useEffect hook can be called multiple times in a functional component to perform different side effects.
 *      - The useEffect hook is used to perform side effects in functional components, such as fetching data, subscribing to events, or updating the DOM.
 *      - The useEffect hook is part of the React Hooks API, which allows functional components to use side effects and other React features without writing a class component.
 *      - The useEffect hook is a powerful tool for adding side effects to functional components and simplifying the development of React applications.
 *      - The useEffect hook can return a cleanup function to clean up any resources or subscriptions created by the side effect.
 *      - The useEffect hook can specify dependencies to control when the side effect is executed.
 *      - The useEffect hook can be used to replace lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.
 *      - The useEffect hook can be used to perform cleanup when a component is unmounted or updated.
 * 
 *      
 *  8) What is the purpose of the useContext hook in React?
 *      - The useContext hook is a function that allows functional components to access the React context.
 *      - The useContext hook takes a context object as an argument and returns the current context value for that context.
 *      - The useContext hook is used to access context values in functional components without using the Context.Consumer component.
 *      - The useContext hook is part of the React Hooks API, which allows functional components to use context and other React features without writing a class component.
 *      - The useContext hook is a powerful tool for accessing context values in functional components and simplifying the development of React applications.
 *      - The useContext hook can be used to access context values from multiple contexts in a single component.
 *      - The useContext hook can be used to access context values from nested components without passing props down the component tree.
 *      - The useContext hook can be used to access context values in functional components that are not direct descendants of the context provider.
 *      - The useContext hook can be used to access context values in functional components that are not rendered by a context provider.
 *      - The useContext hook can be used to access context values in functional components that are conditionally rendered based on props or state.
 *      - The useContext hook can be used to access context values in functional components that are dynamically created or destroyed.
 * 
 *      
 *  9) What is the purpose of the useReducer hook in React?
 *      - The useReducer hook is a function that allows functional components to manage complex state logic with a reducer function.
 *      - The useReducer hook takes a reducer function and an initial state value as arguments and returns a state variable and a dispatch function.
 *      - The useReducer hook is used to manage state in functional components that have complex state logic or multiple state variables.
 *      - The useReducer hook is part of the React Hooks API, which allows functional components to use state and other React features without writing a class component.
 *      - The useReducer hook is a powerful tool for managing state in functional components and simplifying the development of React applications.
 *      - The useReducer hook can be used to replace the useState hook in functional components that have complex state logic.
 *      - The useReducer hook can be used to manage state transitions and side effects in functional components.
 *      - The useReducer hook can be used to implement more complex state management patterns like Redux in functional components.
 *      - The useReducer hook can be used to manage state in functional components that have multiple state variables that depend on each other.
 *      - The useReducer hook can be used to manage state in functional components that have state transitions that are not easily represented by the useState hook.
 *      - The useReducer hook can be used to manage state in functional components that have state logic that is shared between multiple components.
 *      - The useReducer hook can be used to manage state in functional components that have state logic that is asynchronous or side-effectful.
 *      - The useReducer hook can be used to manage state in functional components that have state logic that is complex or hard to reason about.
 *      - The useReducer hook can be used to manage state in functional components that have state logic that is not easily represented by the useState hook.
 * 
 *  10) What is the purpose of the useRef hook in React?
 *      - The useRef hook is a function that allows functional components to create mutable references to DOM elements or other values.
 *      - The useRef hook takes an initial value as an argument and returns a mutable ref object.
 *      - The useRef hook is used to access DOM elements, manage focus, or store mutable values in functional components.
 *      - The useRef hook is part of the React Hooks API, which allows functional components to use refs and other React features without writing a class component.
 *      - The useRef hook is a powerful tool for managing mutable values and accessing DOM elements in functional components.
 *      - The useRef hook can be used to access DOM elements in functional components without using the ref attribute.
 *      - The useRef hook can be used to manage focus in functional components without using the autoFocus attribute.
 *      - The useRef hook can be used to store mutable values in functional components that persist between renders.
 *      - The useRef hook can be used to store mutable values in functional components that do not trigger re-renders when updated.
 *      - The useRef hook can be used to store mutable values in functional components that are not part of the component state.
 *      - The useRef hook can be used to store mutable values in functional components that are not passed as props.
 *      - The useRef hook can be used to store mutable values in functional components that are not derived from props or state.
 *      - The useRef hook can be used to store mutable values in functional components that are not easily represented by the useState hook.
 *      
 *      
 *      
 *          
 *  
 *      
 */