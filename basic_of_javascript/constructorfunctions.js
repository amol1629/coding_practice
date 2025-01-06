/**
 * * Constructor Functions : 
 *  - Constructor functions are used to created and initialize the objects. 
 *  - By convention, Constructor Functions names start with an uppercase letter.
 *  
 * - Characteristics of Constructor Functions : 
 *         1) Used with the "new" keyword : 
 *                  => When called with new, a constructor functions creates a new object, assigns it to this, and implicitly returns it unless a different object is explicitly returned.
 *                  => When called without new, a constructor function behaves like a regular function.
 *          2) Defines Properties and Methods : 
 *                  => You can define properties and method on the "this" object.
 *          3) Prototypes : 
 *                  => Methods can also define the properties of the constructor function to share them across instances (saves memory).
 * 
 *  - If you forget to use new, the function will behave like a regular function, and this may point to the global object or undefined in strict mode.
 *  - ES6 introduced class syntax as a more intuitive way to create objects and manage prototypes, but internally, it is syntactic sugar over constructor functions.

 */

// Creation of constructor function with instance properties
function ConstructorFunction(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype :
ConstructorFunction.prototype.greet = function () {
  console.log(`Hello, dear ${this.name}`);
};

// Creation of object using constructor function :

let john = new ConstructorFunction("john", 12);

john.greet();
