function converter() {
	let amount = document.getElementById("amount").value; 

	const darkSound = new Audio("moneysound.mp3");
		darkSound.play();

	document.body.style.color = "green";

	const eur = amount * 0.86 + " Euro (EUR)"
	document.getElementById("eur").innerText = eur;

	const gbp = amount * 0.76 + " Pound Sterling (GBP)"
	document.getElementById("gbp").innerText = gbp;

	const cad = amount * 1.40 + " Canadian Dollar (CAD)"
	document.getElementById("cad").innerText = cad;

	const chf = amount * 0.80 + " Swiss Franc (CHF)"
	document.getElementById("chf").innerText = chf;

	const jpy = amount * 155.87 + " Japanese Yen (jpy)"
	document.getElementById("jpy").innerText = jpy;

}