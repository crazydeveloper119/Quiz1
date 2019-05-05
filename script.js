//Conditional Statement Preceding Quiz Set up
var response = prompt('Would you like to take a quiz? ');
	if ( response.toUpperCase() === "YES") {
	alert("Great!");

var score = 0;
    
//Quiz Questionaire and Conditionals

//Question #1
var response = prompt('What is his full legal name? ');
	if ( response.toUpperCase() ==="DOUGLAS ANTHONY HUDSON") {
		score = score += 10;
	alert("Thats Correct!");
	
    } else {
		alert("I'm sorry that's incorrect.");
    } 

//Question #2
var response = prompt('What is his favorite color? ');
	if ( response.toUpperCase() === "BLUE") {
		score = score += 10;
	alert("That's Correct!");
    } else {
	alert("I'm sorry that's incorrect.");
    }

//Question #3
var response = prompt('What state is he  from? ');
	if (response.toUpperCase() === "ARKANSAS" ) {
		score = score += 10;
	alert("That's correct!");
    } else {
	alert("I'm sorry that's incorrect.");
    } 

//Question #4
var response = prompt("Is he adopted? " + "True or false?");
	if ( response.toUpperCase() === "TRUE") {
		score = score += 10;
	alert("That's Correct!");
    } else {
	alert("I'm sorry that's incorrect.");
    }

//Question #5
var response = prompt("Does he know alot about computers?");
	if ( response.toUpperCase() === "YES") {
		score = s += 10;
	alert("That's Correct!");
    } else {
	alert("I'm sorry that's incorrect.");
    }
//Question #6
var response = prompt("What brand is his cell phone?");
	if ( response.toUpperCase() === "IPHONE") {
	alert("Thats Correct!");
	score = score += 10;
    } else {
	alert("I'm sorry that's incorrect.");
    }

//Question # 7
var response = prompt("Does he plan on going back to school?");
	if ( response.toUpperCase() === "YES") {
		score = score += 10;
	alert("That's Correct!");
    } else {
	alert("I'm sorry that's incorrect.");
    }

//Question #8
var response = prompt("What city does he live in?");
	if ( response.toUpperCase() === "ARLINGTON") {
		score = score += 10;
	alert("That's Correct!");
    } else {
	alert("I'm sorry that's incorrect.");
    }

//Question #9
var response = prompt("What color is his car?");
	if ( response.toUpperCase() === "WHITE") {
		score = score += 10;
	alert("Thats Correct!");
    } else {
	alert("I'm sorry that's incorrect.");
    }

//Question #10
var response = prompt("What state was he born in?");
	if ( response.toUpperCase() === "MISSISSIPPI") {
		score = score =+ 10;
	alert("Thats Correct!");
    } else {
	alert("I'm sorry thats incorrect.");
    }

	alert("Congratulations! " + "You passed!");
	document.write('<h3>Your score is ' + score + '</h3>')

//If user declines to take the quiz
    }else if  ( response.toUpperCase() === "NO") {
	alert("Sorry! Come back another time!");
    }
