/**
 * * Call() Method :
 *  - The call() method calls a function with specified "this" value and arguments provided one by one.
 *
 *  - Syntax :
 *              functionName.call(thisArg, arg1, arg2, ....)
 *
 *                      thisArg => The value to be used as this when the function is called.
 *                      arg1, arg2, .... => The arguments to be passed to the function.
 *
 *  - We can invoke the call() method immediately by passing individual arguments and it does not returns a new function like bind();
 *  - The call() borrow a method from one object to another.
 */

// function describeRoleForCallMethod(role) {
//   console.log(`${this.name} works as a ${role}`);
// }

// const employee = { name: "Tony" };

// describeRoleForCallMethod.call(employee, "Front End Developer");

/**
 * * Apply() Method :
 *  - The apply() method is similar to call() method, but it takes an array (array-like object) of arguments instead of listing them individually.
 *
 *  - Syntax :
 *              functionName.apply(thisArg, [arg1, arg2, ....]);
 *
 *                      thisArg => The value to be used as this when the function is called.
 *                      [arg1, arg2, ....] => An array of  arguments to be passed to the function.
 *
 *  - We can invoke the apply() method immediately by passing  arguments in array and it does not returns a new function like bind();
 *  - Use apply() method when arguments are already in an array or array-like object.
 */

// function describeRoleForApplyMethod(role, organization) {
//   console.log(`${this.name} works as a ${role} in ${organization}.`);
// }

// const employee = { name: "Tony" };

// describeRoleForApplyMethod.apply(employee, ["Front End Developer", "Google"]);

/**
 * * Bind() Method :
 *  - The bind() method returns a new function with a specific this context and optional arguments pre-applied, without immediately calling the function.
 *
 *  - Syntax :
 *              const boundFunction = functionName.bind(thisArg, arg1, arg2, ....);
 *
 *                  thisArg => The value of "this" to be used inside the new function.
 *                  arg1, arg2, .... => The arguments to be pre-applied to the new function.
 *
 *  - In bind() method, we can not call it immediately, we pass arguments to it individually and it returns a new bound function.
 *  - The bind() method creates a function with a fixed "this" context, useful for event handling or partial application.
 */

function describeRoleForBindMethod(role, organization) {
  console.log(`${this.name} works as a ${role} in ${organization}.`);
}

const employee = { name: "Tony" };

const boundFunction = describeRoleForBindMethod.bind(
  employee,
  "Front End Developer",
  "Google"
);

boundFunction();
