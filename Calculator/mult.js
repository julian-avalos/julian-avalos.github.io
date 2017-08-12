function calculate(){
	var x = parseFloat(document.getElementById("a").value);
	var y = parseFloat(document.getElementById("b").value);
	if(isNaN(x) || isNaN(y)){
		document.getElementById("error").innerHTML="Please enter a number";
		document.getElementById("answer").value = "";
	}
	else{
		document.getElementById("answer").innerHTML = x*y;
		document.getElementById("error").innerHTML="";
	}
}
