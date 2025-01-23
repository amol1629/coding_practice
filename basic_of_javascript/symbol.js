/**
 *  * Symbol in JavaScript :
 *
 *  - In JavaScript, the Symbol is a unique and immutable primitive data type introduced in ECMAScript 6 (ES6).
 *
 *  - It is primarily used as a way to create unique keys for objects properties, ensuring that there are no accidental property name collisions, even when multiple developers or libraries work with the same object.
 *
 *  - A Symbol is a primitive data type, like string, number, boolean and bigint.
 * - Each Symbol is unique and immutable, meaning no two Symbol values are the same, even if they have the same description.
 *
 *  - Key Characteristics of Symbol :
 *          1) Uniqueness : Symbol is guaranteed to be unique.
 *
 *          2) Optional Description :  You can pass an optional string description for debugging purposes. This description has no impact on the uniqueness of the Symbol.
 *
 *          3) Immutability : Once a Symbol is created, it cannot be changed.
 *
 *          4) Not Auto-Convertible to String : Unlike other primitives, Symbol cannot be implicitly converted to a string. You must explicitly call .toString() to use it as a string.
 *
 *  - Use Cases of Symbol :
 *          1) Unique Object Keys : Symbol is often used to define property keys that are unique and won’t conflict with any other keys, including string keys.
 *
 *          2) Avoiding Property Name Collisions
 *
 *          3) Hiding Internal Implementation Details
 *
 *          4) Customizing Built-in Behaviors
 *
 *  - Limitations of Symbol :
 *          1) No Serializable : Symbols are ignored during JSON serialization.
 *
 *          2) Difficult to Debug : Since Symbols are unique, debugging them can be challenging. Using descriptions can help mitigate this.
 *
 *          3) No Symbol Literals :  Unlike string or number, there’s no literal syntax for creating Symbols.
 *
 */

const sym1 = Symbol("desc");
const sym2 = Symbol("desc");
console.log(sym1 === sym2); // false

const ID = Symbol("id");
const user = {
	name: "Alice",
	[ID]: 1234,
};

console.log(Object.keys(user)); // ['name'] (Symbol properties are not listed)
console.log(user[ID]); // 1234

//  Hiding Internal Implementation Details
const privateProp = Symbol("private");
const obj = {
	[privateProp]: "hidden",
	publicProp: "visible",
};

console.log(Object.keys(obj)); // ['publicProp']
console.log(obj[privateProp]); // 'hidden'
