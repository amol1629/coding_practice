/**
 *  * The delete operator in JavaScript :
 *
 *  - The delete operator is used to "remove a property from an object"
 *  - The delete operator can not delete "variables declared using var, let, or const".
 *
 *  - Return value of delete :
 *          - The delete operator returns a boolean :
 *                  1) true : If the property is successfully delete.
 *                  2) false : If it fails (e.g., when trying to delete a variable or constant).
 *
 *  - The delete operator works only for object properties, not for variables or constants.
 *  - Constants (const) cannot be deleted entirely, as they are bindings in the scope, not properties of an object.
 */

const abc = {
	name: "Tony",
};

const num = [1, 2, 3, 4, 5];

console.log("Delete object : ", delete abc.name);
console.log("Delete Array : ", delete num);
