var game = function() {
	var userChoice = prompt("Choose a number between 1 and 10!");
	var pcChoice = Math.floor(Math.random() * (10 - 1 + 1)) + 1; 

	console.log(pcChoice);	
	if(userChoice > 10 || userChoice < 1) {
		console.log("Please only choose numbers between 1 and 10!");
	}
	else {
		if(userChoice == pcChoice) {
			console.log("You win!");
		}
		else {
			console.log("The computer chose " + pcChoice + " , but you chose " + userChoice + "." + " Try again!");
		}
	}
}

game();
