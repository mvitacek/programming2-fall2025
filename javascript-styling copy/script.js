let counter = 0;

function mode() {
	document.body.classList.toggle("dark");
	if (counter % 2 == 0) {
		const darkSound = new Audio("dj-airhorn-38014.mp3");
		darkSound.play();
		document.getElementById("mode").innerText = "Light 💡"
		counter = counter + 1;
	} 
	else {
		document.getElementById("mode").innerText = "Dark 🌙"
		counter = counter + 1;
		const darkSound = new Audio("elf-singing-89296.mp3");
		darkSound.play();
	}
	
}