/**
 *  ? Context API :
 *      1) Create Context using createContext() method.
 *      2) Create a provider in which you can add states and method for global access.
 *      3) Use that created context (using useContext() method) to access the states and methods in any component.
 *      4) Wrap the provider around the component tree where you want to access the context.
 *      5) Create your custom hook to access the context easily. (optional)
 *
 */

import { createContext } from 'react'

const ThemeContext = createContext()

export default ThemeContext
