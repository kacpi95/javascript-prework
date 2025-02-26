const getMoveName = (moveId) => {
	if (moveId == 1) {
		return "kamień";
	} else if (moveId == 2) {
		return "papier";
	} else if (moveId == 3) {
		return "nożyce";
	} else {
		return "nieznany ruch";
	}
};

const displayResult = (computerMove, playerMove) => {
	if (
		(computerMove == "kamień" && playerMove == "nożyce") ||
		(computerMove == "papier" && playerMove == "kamień") ||
		(computerMove == "nożyce" && playerMove == "papier")
	) {
		printMessage("Komputer wygrał");
	} else if (computerMove === playerMove) {
		printMessage("Remis");
	} else {
		printMessage("Ty wygrywasz");
	}
};

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
let playerMove = getMoveName(playerInput);

printMessage("Mój ruch to: " + computerMove);
printMessage("Twój ruch to: " + playerMove);

displayResult(computerMove, playerMove);
