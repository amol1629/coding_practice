/**
 *  * Generator Functions : 
 * 
 *  - Generator functions are special type of function that can be paused and resumed during execution.
 *  - They are useful for producing a series of values over time, rather than computing them all at once.
 * 
 *  - They are defined using the function keyword and the asterisk symbol (function*). 
 *  - Unlike regular functions they don't execute completely when invoked. Instead, they return a special "iterator object" called "generator object".
 * 
 *  - How Generator Work : 
 *          1) Pauseable Execution : Generators use "yield" keyword to pause execution and return a value to the caller. Execution can then be resumed later from where it was paused.
 * 
 *          2) Generator Object : When a generator function is invoked, it returns a generator object. This object has a next() method which can be used to resume execution of the generator function.
 * 
 *          3) Lazy Evaluations : Generators don't calculate all the values upfront. Instead values are generated on demand, making them memory efficient.
 * 
 *  - The generator object has two methods :
 *          1) next() : This method is used to resume execution of the generator function. It returns the next value produced by the generator function.
 *          2) throw() : This method is used to throw an exception in the generator function.
 * 
 *  - The "yield" keyword acts like a return but also pauses the function execution. When next() is called, the generator resumes execution from the last yield.
 *  - A generator object exposes next() method : 
 *          => next() resumes the function until next "yield" or the end of the function.
 *          => It return an object with : 
 *                      i) value : the value produced by "yield"
 *                      ii) done : a boolean indicating whether the generator is done or not. (false -> generator can continue, true -> generator is finished.)
 * 
 *  - Advance Concepts in Generator Function : 
 *          1) Infinite Sequences : Generators can be used to create infinite sequences of values.
 *          2) Delegation with "yield" : You can delegate control to another generator using "yield" keyword.
 *          3) Two-Way Communication with next(arg) : You can send data back to generator by passing arguments to "next()".
 *          4) Return Statements : A return statement in a generator function returns a value and stops the generator adn sets "done: true".
 *          5) Iterating Over Generators : Generators are iterable, so you can use them with loops like for...of.
 *          6) Error Handling : Generators can handle errors using try-catch blocks.
 *          
 * 
 *  - Use Cases : 
 *          1) Data Streams: Generators are ideal for working with large or infinite data streams, processing only the necessary elements on demand.
 *          2) Asynchronous Programming: Before async/await, generators were widely used to write asynchronous code. Libraries like "co" abstracted this pattern.
 *          3) Custom Iterators: You can use generators to implement iterable objects.
 *          4) Lazy Evaluation: Situations requiring heavy computation or working with large datasets.
 * 
 */

// Basic Example :

function* generatorFunction() {
    yield "First Statement"
    yield "Second Statement"
    yield "Third Statement"
    yield "Forth Statement"
    return "Last Statement"
}

const generator = generatorFunction()

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())