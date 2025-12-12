function getResults() {
	let breakfastChoice = document.getElementsByName("breakfastChoice");
	let activityOne = document.getElementsByName("activityOne");
	let lunchOrder = document.getElementsByName("lunchOrder");
	let eventChoice = document.getElementsByName("eventChoice");
	let sleepTime = document.getElementsByName("sleepTime");
	
	let questionOne = 0;
	let questionTwo= 0;
	let questionThree = 0;
	let questionFour = 0;
	let questionFive = 0;

	let counter = 1

	console.log(breakfastChoice);
		for (const item of breakfastChoice) {
			if (item.checked) {
				questionOne = counter
			} counter = counter + 1
		}

	counter = 1

	console.log(activityOne);
		for (const item of activityOne) {
			if (item.checked) {
				questionTwo = counter
			} counter = counter + 1
		}

	counter = 1

	console.log(lunchOrder);
		for (const item of lunchOrder) {
			if (item.checked) {
				questionThree = counter
			} counter = counter + 1
		}

	counter = 1

	console.log(eventChoice);
		for (const item of eventChoice) {
			if (item.checked) {
				questionFour = counter
			} counter = counter + 1
		}

	counter = 1
	
	console.log(sleepTime);
		for (const item of sleepTime) {
			if (item.checked) {
				questionFive = counter
			} counter = counter + 1
		}

	const img = document.getElementById("result");
	let result = questionOne + questionTwo + questionThree + questionFour + questionFive
	let trend = "" 
	let explanation = "" 
	
	if (result < 5) {
		alert("Please answer each question!")
	} else if (result < 6) {
		trend = "Quarter Zip and Matcha"
		const darkSound = new Audio("audios/qzipmatcha.MP3");
		darkSound.play();
		img.src = "imgs/qzipmatcha.jpg";
		explanation = "You got Quarter Zip and Matcha! You def don't wear Nike Tech nor do you drink coffee. You are well respected by your peers and are destined for greatness!"
	} else if (result < 8) {
		trend = "67"
		const darkSound = new Audio("audios/67.MP3");
		darkSound.play();
		img.src = "imgs/67.jpg";
		explanation = "You got 67! You probably think 9 + 10 = 21 and are a very loud chatty person! You EXCEL at the sports you do and are the comic relief of the team. Keep being you!"
	} else if (result < 9) {
		trend = "Labubu"
		const darkSound = new Audio("audios/labubu.MP3");
		darkSound.play();
		img.src = "imgs/labubu.jpg";
		explanation = "You got labubu! You are the kind of person who participates in consumer trends and will spend an insane amount of money just to be on trend. You should work on being your own person..."
	} else if (result < 11) {
		trend = "My mom kinda homeless"
		const darkSound = new Audio("audios/speed.MP3");
		darkSound.play();
		img.src = "imgs/speed.jpg";
		explanation = "You got My mom kinda homeless! You probably play lots of fortnite and love watching YouTube. You are the kind of person who can't keep their face staright in serious situations and that's ok!"
	} else if (result < 12) {
		trend = "John Pork"
		const darkSound = new Audio("audios/johnpork.MP3");
		darkSound.play();
		img.src = "imgs/johnpork.jpg";
		explanation = "You got John Pork! You are always calling people and wanting to hangout with your friends! You are everyones favorite person to get a call from. You are that guy!"
	} else if (result < 14) {
		trend = "Italian Brainrot"
		const darkSound = new Audio("audios/brainrot.MP3");
		darkSound.play();
		img.src = "imgs/brainrot.jpg";
		explanation = "You got Italian Brainrot! You are a great friend and always crack silly jokes to lighten the mood! Your just like Triple T Sahur and people are intimidated by your aura. Keep up the good work!"
	} else if (result < 17) {
		trend = "BEEFIN WITH MY CHICK WHILE IM IN JAIL"
		const darkSound = new Audio("audios/beefin.MP3");
		darkSound.play();
		img.src = "imgs/beefin.jpg";
		explanation = "You got BEEFIN WITH MY CHICK WHILE IM IN JAIL! You probably have beef with lots of people (mostly your chick when ur in jail). You have a couple of felonies but you keep at the grind. Don't give up!"
	} else if (result < 19) {
		trend = "12, 123 release em"
		const darkSound = new Audio("audios/releasem.MP3");
		darkSound.play();
		img.src = "imgs/releasem.jpg";
		explanation = "You got 12, 123 release em! You love to sing and spreed your joy at fun events like funerals! Your voice lights up the room and balloons are released everywhere you go. Wow!"
	} else {
		trend = "Niche Frying Baby"
		const darkSound = new Audio("audios/nichebaby.MP3");
		darkSound.play();
		img.src = "imgs/nichebaby.jpg";
		explanation = "You got Niche Frying Baby! You are very intellegent (idk if I spelled that right) and always tell yours friends 'son' when they are wrong. Keep at it buddy!"
	}

	document.getElementById("trend").innerText = trend;
	document.getElementById("explanation").innerText = explanation;
	console.log(result)

	const answer = document.getElementById("answer");
	answer.style.backgroundColor = "white";

	const button = document.getElementById("button");
	button.style.backgroundColor = "green";
} 