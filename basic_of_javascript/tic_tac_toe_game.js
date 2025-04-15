let box = document.querySelector("#box");

const arr = Array(9).fill(null);

const winningPossibilities = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

let currentPlayer = "X";

// Check the winner This is functions to check if there is a winner
const winner = (arr) => {
	for (let i = 0; i < winningPossibilities.length; i++) {
		const [a, b, c] = winningPossibilities[i];
		
		if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) return arr[a];
	}

	return null;
};
// Function to handle click events on the boxes
function handleBoxClick(el) {
	let id = Number(el.id);

	if (arr[id] !== null) return;

	arr[id] = currentPlayer;
	el.innerHTML = currentPlayer;

	const winnerPlayer = winner(arr);

	if (winnerPlayer !== null) {
		// Fill all boxes with the winner symbol
		document.querySelectorAll(".cell").forEach((cell, idx) => {
			cell.innerHTML = winnerPlayer;
		});

		setTimeout(() => {
			alert(`Winner is : ${winnerPlayer}`);
		}, 100); // delay to allow UI update
	} else if (arr.every((item) => item !== null)) {
		// Draw: fill all boxes with 'D' or keep existing values
		document.querySelectorAll(".cell").forEach((cell) => {
			cell.innerHTML = "D";
		});

		setTimeout(() => {
			alert("Draw");
		}, 100);
	} else {
		currentPlayer = currentPlayer === "X" ? "O" : "X";
	}
}
