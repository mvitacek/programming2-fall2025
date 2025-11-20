function agerator() {
	let age = document.getElementById("age").value;

	// if (age == 10) {
	// 	alert("You're the best age!")
	// } else {
	// 	if (age > 10){
	// 		alert("You were the best age " + (age-10) + " years ago. You're now unc!")
	// 	} else {
	// 	alert("You will be the best age in " + (10-age) + " years. You're NOT unc")
	// 	}
	// }

	let message = document.getElementById("message");
		if (age == 10) {
			message.innerText = "You're the best age!"
		} else if (age > 10){
			message.innerText = "You were the best age " + (age-10) + " years ago. You're now unc!"
		} else if (age < 0) {
			message.innerText = "Boi thats not possible"
		} else {
			message.innerText = "You will be the best age in " + (10-age) + " years. You're NOT unc"
		}
} 