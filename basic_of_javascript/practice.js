// class Person {
// 	constructor(name) {
// 		this.name = name;
// 	}

// 	// Instance Method
// 	print = () => {
// 		console.log(this.name);
// 	};
// }

// class Employee extends Person {
// 	constructor(name, id) {
// 		super(name);
// 		this.id = id;
// 	}

// 	// Prototype Method
// 	print() {
// 		console.log(this.name, this.id);
// 	}
// }

// const one = new Person("one");
// one.print();

// const two = new Employee("two");
// two.print();


functionDeclaration();
functionExpression();
arrowFunction();

function functionDeclaration() {
	console.log("Function Declaration");
}

const functionExpression = function () {
    console.log("Function Expression");
};

const arrowFunction = () => {
    console.log("Arrow Function");
}
