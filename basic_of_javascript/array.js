let numbers = [10, 20, 30, 40, 50, 60, 70, 80];

let price = [250, 645, 300, 900, 50];

let languages = [
  "JavaScript",
  "Python",
  "React",
  "Angular",
  "Ruby On Rail",
  "Dot Net",
  "Go",
  "Swift",
];

let person = {
  name: "tony",
  age: 23,
};

let discountedValues = 0;
let discountedArray = [];
for (let num of price) {
  discountedValues = num - num * (10 / 100);

  discountedArray.push(discountedValues);
}

console.log(typeof discountedArray.toString());
