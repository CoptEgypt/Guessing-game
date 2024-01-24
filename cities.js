// cities.js - JavaScript for BIT116 Assignment 2: Cities of Washington Guessing Game
//#####################################################################################################

// Declare an array to hold the city names
///////////////////////////////////////////////////////////////////////////////////////////////////////
// Part 1 //
var city = new Array();
city[0] = "BELLEVUE";
city[1] = "BOTHELL";
city[2] = "DUVALL";
city[3] = "EDMONDS";
city[4] = "KENMORE";
city[5] = "KIRKLAND";
city[6] = "LAKE FOREST PARK";
city[7] = "LYNNWOOD";
city[8] = "MONROE";
city[9] = "MOUNTLAKE TERRACE";
city[10] = "REDMOND";
city[11] = "SEATTLE";
city[12] = "SHORELINE";
city[13] = "TACOMA";
city[14] = "WOODINVILLE";

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Generates a random number based on length of city array
var num = Math.floor(Math.random() * city.length);

// Stores the city name 
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Part 2 //
var cityName = city[num];
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Declare and initialize tries guessed
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Part 3 //
var tries = 0;
/////////////////////////////////////////////////////////////////////////////////////////////////////


// guessIt Function - the main function
function guessIt() {
	/////////////////////////////////////////////////////////////////////////////////////////////////
	
/* 	INSTRUCTIONS: Part 4
	(2) Initialize it with the guess1 value. 
		HINT: Look in existing code to see how this might be done
		HINT: Look for document.form1 and add/tweak accordingly
	(3) Increment tries (either tries++ or tries = tries + 1)
	(4) Set window.status to: "Tries : " + tries;
		HINT: Look in existing code to see how this might be done

	*/
	/////////////////////////////////////////////////////////////////////////////////////////////////
	// Part 4 //
	var guess = form1.guess1.value;
	tries = tries + 1;
	window.status = "Tries : " + tries;
	/////////////////////////////////////////////////////////////////////////////////////////////////
	/* 	INSTRUCTIONS: Part 5

	(1) Create a switch here that is passed 'tries'
	(2) The first case (case 1) should do the following:
		a) Change the hint value to "First Hint: The city name starts with \'" + cityName.charAt(0) + "\'";
		   HINT: Look in existing code to see how this might be done
		b) break
	(2) The second case (case 2)
		a) Change the hint value to "Second Hint: The city name ends with \'" + cityName.charAt(cityName.length - 1) + "\'";
		   HINT: Look in existing code to see how this might be done
		b) break
	(2) The third case (case 3)
		a) Change the hint value to "Last Hint: The city name has " + cityName.length + " characters";
		   HINT: Look in existing code to see how this might be done
		b) break
	(5) The default
		a) Change the hint value to "No more hints available! Last chance to guess!";
		   HINT: Look in existing code to see how this might be done

	*/
	///////////////////////////////////////////////////////////////////////////////////////////
	// Part 5 //
	switch (tries) {
		case 1:
			document.form1.hint.value ="First Hint: The city name starts with \'" + cityName.charAt(0) + "\'";
		break;

		case 2:
			document.form1.hint.value ="Second Hint: The city name ends with \'" + cityName.charAt(cityName.length - 1) + "\'";
		break;

		case 3:
			document.form1.hint.value ="Last Hint: The city name has " + cityName.length + " characters";
		break;

		default:
			document.form1.hint.value ="No more hints available! Last chance to guess!";
	}
	
	if (guess.toUpperCase() == cityName) // Checks if guess equals cityName
	{
		if (window.confirm("You are correct!\n\nThe city was " + cityName + ".\n\nDo you want to play again?")) {
			window.location.reload(); // Reloads the page for a new game
		}
	}
	else {
		if (tries == 5) // Game over without a correct guess
		{
			if (window.confirm("Sorry! You have run out of guesses.\n\nThe city was  " + cityName + ".\n\nDo you want to play again?")) {
				window.location.reload(); // Reloads the page for a new game
				document.form1.hint.value = "Enter a City name below and click Guess button!";
			}
		}
	}
}

// catchKeyCode Function - calls when user presses Enter key
function catchKeyCode() //
{
	if (event.keyCode == 13) {
		guessIt();
	}
}

// guessStatus Function - Shows number of guesses

function guessStatus() {
	window.status = "Tries: " + tries;
}

// clearBox Functions - clears the text box
///////////////////////////////////////////////////////////////////////////////////////////
/* 	INSTRUCTIONS: Part 6

	(1) Create a function called clearBox
	(2) Have the function reset the the value of guess back to empty
		HINT: Look in existing code to see how this might be done

*/
///////////////////////////////////////////////////////////////////////////////////////////
// Part 6 //
function clearBox(){
	guess = "";
	form1.guess1.value=guess
}
// newGame Function - Sets up a new game
///////////////////////////////////////////////////////////////////////////////////////////
/* 	INSTRUCTIONS: Part 7

	(1) Create a function called newGame
	(2) Confirm if so by asking this message: "Do you want to start a new game?"
		HINT: Look in existing code to see how this might be done
		HINT: Look for code that contains window.location and tweak accordingly
	(3) Then reload the page for the new game
		HINT: Look in existing code to see how this might be done
	(4) Change the hint message back to: "Enter your guess below and click Guess button!"
		HINT: Look in existing code to see how this might be done

*/
///////////////////////////////////////////////////////////////////////////////////////////
// Part 7//
function newGame(){
	
	if (window.confirm("Do you want to start a new game?")) {
		window.location.reload(); // Reloads the page for a new game
		document.form1.hint.value = "Enter a City name below and click Guess button!";
	}

}
