function namegen() {
	let month = document.getElementById("month").value;
	let age = document.getElementById("age").value;
	let color = document.getElementById("color").value;

	let nameFirst = "";
	let nameSecond= "";
	let nameThird = "";



		if (month == "january") {
			nameFirst = "Lord"
			document.getElementById("result").style.backgroundColor = "LightPink";
		} else if (month == "january" || month == "july"){
			nameFirst = "Lady"
			document.getElementById("result").style.backgroundColor = "LightPurple";
		} else if (month == "february" || month == "august") {
			nameFirst = "Sir"
			document.getElementById("result").style.backgroundColor = "LightBlue";
		} else if (month == "march" || month == "september") {
			nameFirst = "Duke"
			document.getElementById("result").style.backgroundColor = "LightGreen";
		} else if (month == "april" || month == "october") {
			nameFirst = "Duchess"
			document.getElementById("result").style.backgroundColor = "LightYellow";
		} else if (month == "may" || month == "november") {
			nameFirst = "Madam"
			document.getElementById("result").style.backgroundColor = "LightRed";
		} else if (month == "june" || month == "december") {
			nameFirst = "Jester"
			document.getElementById("result").style.backgroundColor = "LightOrange";
		}


		if (age < 10) {
			nameSecond = "Sigma"
			document.getElementById("result").style.fontSize = "10px";
		} else if (age < 20){
			nameSecond  = "Beta"
			document.getElementById("result").style.fontSize = "20px";
		} else if (age < 30){
			nameSecond  = "Alpha"
			document.getElementById("result").style.fontSize = "30x";
		} else if (age < 40){
			nameSecond  = "Theta"
			document.getElementById("result").style.fontSize = "40px";
		} else if (age < 50){
			nameSecond  = "Pi"
			document.getElementById("result").style.fontSize = "50px";
		} else if (age < 60) {
			nameSecond = "Phi"
			document.getElementById("result").style.fontSize = "60px";
		} else if (age < 70) {
			nameSecond = "Kappa"
			document.getElementById("result").style.fontSize = "70px";
		} else if (age < 80) {
			nameSecond = "Gamma"
			document.getElementById("result").style.fontSize = "80px";
		} else if (age < 90) {
			nameSecond = "Delta"
			document.getElementById("result").style.fontSize = "90px";
		} else {
			nameSecond = "Epsilon"
			document.getElementById("result").style.fontSize = "100px";
		}

		if (color == "red") {
			nameThird = "of Do"
			document.getElementById("result").style.color = "red";
		} else if (color == "gold"){
			nameThird = "of Re"
			document.getElementById("result").style.color = "gold";
		} else if (color == "orange") {
			nameThird = "of Mi"
			document.getElementById("result").style.color = "orange";
		} else if (color == "yellow") {
			nameThird = "of Fa"
			document.getElementById("result").style.color = "yellow";
		} else if (color == "green") {
			nameThird = "of So"
			document.getElementById("result").style.color = "green";
		} else if (color == "blue") {
			nameThird = "of La"
			document.getElementById("result").style.color = "blue";
		} else if (color == "purple") {
			nameThird = "of Ti"
			document.getElementById("result").style.color = "purple";
		} else if (color == "pink") {
			nameThird = "of Do"
			document.getElementById("result").style.color = "pink";
		} else if (color == "silver"){
			nameThird = "of Re"
			document.getElementById("result").style.color = "silver";
		}

	const result = nameFirst + " " + nameSecond + " " + nameThird
	document.getElementById("result").innerText = result;
}
