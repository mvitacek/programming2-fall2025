let attempts = 0

function login() {
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	//console.log(username);
	//console.log(password);

	let correct_username = "helen-akl";
	let correct_password = "lioneliscool";

	attempts = attempts + 1;

	if(username == correct_username && password == correct_password) {
		//window.location.href = ""
		document.getElementById("result").innerText = "Correct!"
		document.getElementById("result").style.color = "green";
	} else if(attempts >= 3) {
		//alert("You ran out of attempts!")
		document.getElementById("login").disabled = true;
		document.getElementById("result").innerText = "You ran out of attempts"
		document.getElementById("result").style.color = "red";
	} else {
		//alert("Password or Username is incorrect")
		document.getElementById("result").innerText = "Password or Username is incorrect"
		document.getElementById("result").style.color = "yellow";
	}
}