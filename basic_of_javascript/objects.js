/**
 *  * Objects in JavaScript :
 *
 *  - Objects are the most important data type in JavaScript. An object is a collection of key/value pairs.
 *  - The values can consist of properties and methods, and may contain all other data types, such as strings, numbers, and Booleans.
 *  - The keys are strings, and the values are any data type.
 *  - Objects are created using the object literal or the Object constructor.
 *  - The object literal is the most common way to create objects.
 *  - The key-value pairs are called properties.
 *  - The properties of an object can be accessed using the dot notation or the bracket notation.
 *  - The dot notation is the most common way to access the properties of an object.
 *  - The bracket notation is used when the property name is dynamic or when the property name is a reserved word.
 *  - The properties of an object can be added, modified, and deleted.
 *
 *  ? delete operator :
 *  - The delete operator is used to delete a property from an object.
 *
 *  ? Object Methods :
 *  - - Object.keys(), Object.values(), Object.entries(), Object.assign(), spread operator, destructuring assignment, Object.defineProperty(), Object.getOwnPropertyDescriptor(), Object.getOwnPropertyDescriptors(), Object.getOwnPropertyNames(), Object.getOwnPropertySymbols(), Object.getPrototypeOf(), Object.setPrototypeOf(), Object.is(), Object.freeze(), Object.seal(), Object.preventExtensions(), Object.isExtensible(), Object.isFrozen(), Object.isSealed() :
 *
 *          ? Object.keys() :
 *                      - The Object.keys() method returns an array of the keys of an object.
 *
 *          ? Object.values() :
 *                      - The Object.values() method returns an array of the values of an object.
 *
 *          ? Object.entries() :
 *                      - The Object.entries() method returns an array of the key-value pairs of an object.
 *
 *          ? Object.assign() :
 *                      - The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
 *
 *          ? The spread operator (...) :
 *                      - The spread operator is used to copy the values of all enumerable own properties from one or more source objects to a target object.
 *
 *          ? Destructuring assignment :
 *                      - The destructuring assignment is used to extract the values of an object into variables.
 *
 *          ? Object.defineProperty()  :
 *                      - The Object.defineProperty() method is used to define a new property directly on an object or modify an existing property on an object, and return the object.
 *
 *          ? Object.getOwnPropertyDescriptor() :
 *                      - The Object.getOwnPropertyDescriptor() method is used to get the descriptor of a property on an object.
 *
 *          ? Object.getOwnPropertyDescriptors() :
 *                      - The Object.getOwnPropertyDescriptors() method is used to get all own property descriptors of an object.
 *
 *          ? Object.getOwnPropertyNames() :
 *                      - The Object.getOwnPropertyNames() method is used to get an array of all the own property names of an object.
 *
 *          ? Object.getOwnPropertySymbols() :
 *                      - The Object.getOwnPropertySymbols() method is used to get an array of all the own property symbols of an object.
 *
 *          ? Object.getPrototypeOf() :
 *                      - The Object.getPrototypeOf() method is used to get the prototype of an object.
 *
 *          ? Object.setPrototypeOf() :
 *                      - The Object.setPrototypeOf() method is used to set the prototype of an object.
 *
 *          ? Object.is() :
 *                      - The Object.is() method is used to determine whether two values are the same value.
 *
 *          ? Object.freeze() :
 *                      - The Object.freeze() method is used to freeze an object, preventing new properties from being added to it, existing properties from being removed, and existing properties, or their enumerability, configurability, or writability from being changed.
 *
 *          ? Object.seal() :
 *                      - The Object.seal() method is used to seal an object, preventing new properties from being added to it and marking all existing properties as non-configurable.
 *
 *          ? Object.preventExtensions() :
 *                      - The Object.preventExtensions() method is used to prevent new properties from being added to an object.
 *
 *          ? Object.isExtensible() :
 *                      - The Object.isExtensible() method is used to determine whether an object is extensible.
 *
 *          ? Object.isFrozen() :
 *                      - The Object.isFrozen() method is used to determine whether an object is frozen.
 *
 *          ? Object.isSealed() :
 *                      - The Object.isSealed() method is used to determine whether an object is sealed.
 *
 *          ? Object.create() :
 *                      - The Object.create() method is used to create a new object with the specified prototype object and properties.
 *
 *
 *  ? JSON : 
 *  - JSON (JavaScript Object Notation) is a lightweight data-interchange format.
 *  - It is easy for machines to parse and generate.
 *  - JSON is language-independent.
 * 
 *  - JSON format Rules : 
 *          - JSON only supports string, number, boolean, null, array, and object types.
 *          - JSON property names must be double-quoted strings.
 *          - JSON property names must be unique.
 *          - JSON does not support functions, undefined, or date objects.
 *          - JSON does not support comments.
 *          - JSON does not support trailing commas.
 *          
 *   
 *  - JSON methods : 
 *          ? JSON.stringify() : 
 *                  - JSON.stringify() method is used to convert a JavaScript object or array to a JSON string.
 * 
 *                  - Syntax : JSON.stringify(value, replacer, space)
 *                                  =>  value : The value (JavaScript object/array) to convert to a JSON string.
 *                                  =>  replacer : The replacer argument can be a function or an array that can filter and transform the results.
 *                                  =>  space (optional) : The space argument can be a number or a string that specifies the indentation of nested structures.
 * 
 *                  - JSON.stringify() excludes functions, properties that are undefined, and symbols when stringifying an object.
 * 
 *                  - NaN and Infinity are not included in the JSON.stringify() output.
 *                  - NaN is converted to null, and Infinity is converted to null.
 *                  - JSON.stringify() does not include the prototype chain of the object.
 *                  - JSON.stringify() does not include non-enumerable properties.
 * 
 *                  - Notes : 
 *                          ==>  NaN -> null
 *                          ==>  Infinity -> null
 *                          ==>  undefined -> removed
 *                          ==>  function -> removed
 *                  
 *         ? JSON.parse() :
 *                  - The JSON.parse() method is used to convert a JSON string to a JavaScript object.
 * 
 *                  - Syntax : JSON.parse(text, reviver)
 *                              =>  text : The JSON string to parse.
 *                              =>  reviver : The reviver argument can be a function that can filter and transform the results.
 *                  
 *                  - JSON.parse() does not allow : 
 *                              => trailing commas.
 *                              => single quotes.
 *                              => comments.
 *                              => unquoted property names.
 *                              => a comma after the last element.
 *                              => a duplicate key.
 *                              => a number with a leading zero.
 *                              => a number with a decimal point but no digits.
 *                              => a number in hexadecimal format.
 *                              => a number in octal format.
 *                              => a number in binary format.
 *                              => a number with a fractional part that is not zero. 
 *                              => a number with a fractional part that is not followed by a digit.
 * 
 *      
 *          ? JSON.parse(JSON.stringify(object)) : 
 *                  - The JSON.parse(JSON.stringify(object)) method is used to create a deep copy of an object.
 *                  - This method is useful when you want to create a copy of an object that is not connected to the original object.
 *                  - This removes references, unlike shallow copying (=).
 *                  - This method is slower than other methods.
 *                  - This method does not work with functions, undefined, or symbols.
 *                  - This method does not work with circular references.
 *                  - This method does not work with NaN or Infinity.
 * 
 *          ? toJSON() :
 *                  - The toJSON() method is used to return a JSON representation of an object.
 *                  - This method is called when the JSON.stringify() method is used.
 *                                   
 *     
 *      
 *
 *
 *
 */

// let person = {
//     name: 'John',
//     age: 25,
// }

// Object.defineProperty(person, 'salary', { value: 1000, writable: true, enumerable: true, configurable: true });
// console.log(person)

const name = "Tony";

const string1 = "JavaScript";

const string2 = "JavaScript";

const obj1 = {
    firstName :  "Lenovo",
    price : 40000,
    isAvailable : true
};

const obj2 = {
    firstName :  "Lenovo",
    price : 40000,
    isAvailable : true
};

console.dir(name)
