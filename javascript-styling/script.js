let counter = 0;

function mode() {

	if (counter % 2 == 0) {
		document.getElementById("mode").innerText = "Light 💡"
		counter = counter + 1;

		document.body.style.color = "white";
		document.body.style.backgroundColor = "#040d29";

		document.getElementById("navbar").style.color = "white";
		document.getElementById("navbar").style.backgroundColor = "#040d29";

		document.getElementById("welcome").style.color = "white";
		document.getElementById("welcome").style.backgroundColor = "#1d2f66";

		document.getElementById("features").style.color = "white";
		document.getElementById("features").style.backgroundColor = "#1d2f66";

		document.getElementById("testimonials").style.color = "white";
		document.getElementById("testimonials").style.backgroundColor = "#040d29";

		document.getElementById("footer").style.color = "white";
		document.getElementById("footer").style.backgroundColor = "#1d2f66";

		const link = document.getElementsByClassName("link");
		console.log(link);
		for (const item of link) {
			item.style.color = "white";
		}
		const card = document.getElementsByClassName("card");
		console.log(card);
		for (const item of card) {
			item.style.color = "white";
			item.style.backgroundColor = "#394361";
		}
		const testimonialcard = document.getElementsByClassName("testimonial-card");
		console.log(testimonialcard);
		for (const item of testimonialcard) {
			item.style.color = "white";
			item.style.backgroundColor = "#394361";
		}
		const h4 = document.getElementsByTagName("h4");
		for (const item of h4) {
			item.style.color = "white";
		}
	} 
	else {
		document.getElementById("mode").innerText = "Dark 🌙"
		counter = counter + 1;

		document.body.style.color = "black";
		document.body.style.backgroundColor = "white";

		document.getElementById("navbar").style.color = "black";
		document.getElementById("navbar").style.backgroundColor = "white";

		document.getElementById("welcome").style.color = "black";
		document.getElementById("welcome").style.backgroundColor = "#e5edff";

		document.getElementById("features").style.color = "black";
		document.getElementById("features").style.backgroundColor = "#f0f0f0";

		document.getElementById("testimonials").style.color = "black";
		document.getElementById("testimonials").style.backgroundColor = "#ffffff";

		document.getElementById("footer").style.color = "black";
		document.getElementById("footer").style.backgroundColor = "#ddd";

		const link = document.getElementsByClassName("link");
		console.log(link);
		for (const item of link) {
			item.style.color = "#333";
		}
		const card = document.getElementsByClassName("card");
		console.log(card);
		for (const item of card) {
			item.style.color = "black";
			item.style.backgroundColor = "white";
		}
		const testimonialcard = document.getElementsByClassName("testimonial-card");
		console.log(testimonialcard);
		for (const item of testimonialcard) {
			item.style.color = "black";
			item.style.backgroundColor = "#f7f7f7";
		}
		const h4 = document.getElementsByTagName("h4");
		for (const item of h4) {
			item.style.color = "#555";
		}
	}
	
}