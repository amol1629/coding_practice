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




const input = document.querySelector("#input-box");
const inputTextValue = document.querySelector("#input-text-value");

const logInput = (e) => {
	const value = e.target.value;
    console.log("Input text", value);
    inputTextValue.innerHTML = value;
};

const debounce = (func, delay) => {
	let timeoutId;
	return function (...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func(...args);
		}, delay);
	};
};

const throttle = (func, delay) => {
    let lastTime = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastTime >= delay) {
            lastTime = now;
            func(...args);
        }
    };
}

// const throttled = throttle(logInput, 1000);
// input.addEventListener("input", throttled);

const debounced = debounce(logInput, 1000);

input.addEventListener("input", debounced);


