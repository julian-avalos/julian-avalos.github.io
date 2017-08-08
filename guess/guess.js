var num, numGuess, tries, maxTries;

function start(){
	num=Math.floor(Math.random()*100)+1;
	tries=0;
	maxTries=0;
	console.log(num);
	console.log(tries);
	document.getElementById("difficulty").innerHTML=
	"Choose your difficulty";
	document.getElementById("button").disabled=false;
	document.getElementById("previous_answers").value="";
	document.getElementById("guess").value="";
}

function difficulty(diff){
	maxTries=diff;
	if(maxTries==10){
		document.getElementById("difficulty").innerHTML=
		"You've chosen Easy. You have 10 tries to guess the number";
	}
	if(maxTries==5){
		document.getElementById("difficulty").innerHTML=
		"You've chosen Hard. You have 5 tries to guess the number";
	}
}

function calculate(){
	if(maxTries == 0){
		document.getElementById("hint").innerHTML=
		"Please choose difficulty first";
	}
	if(tries < maxTries){
		numGuess = document.getElementById("guess").value;
		if(numGuess < num){
			document.getElementById("hint").innerHTML="Guess Higher";
		}
		if(numGuess > num){
			document.getElementById("hint").innerHTML="Guess Lower";
		}
		if (numGuess == num){
			document.getElementById("hint").innerHTML="Correct!";
			document.getElementById("button").disabled=true;
		}
		tries++;
		document.getElementById("previous_answers").value=
		document.getElementById("previous_answers").value + numGuess + " ";
		console.log(tries);
	}

	if(tries == maxTries && numGuess != num){
		document.getElementById("hint").innerHTML="Game Over";
		document.getElementById("button").disabled=true;
	}
}