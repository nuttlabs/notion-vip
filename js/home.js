window.addEventListener('load', addButtonListener );

function addButtonListener() {

	let subscribeBtn  = document.getElementById('subscribeBtn');

	subscribeBtn.onclick = function() {

		if( isValidEmail() ) {
			advanceToPart2();
		} else {
			displayEmailError();
		}

	}

}

function isValidEmail() {

	let emailTestPattern = /.+@[a-z0-9]{2,}\.[a-z]{2,}$/i;

	let enteredEmail = document.getElementById('email').value;

	return emailTestPattern.test(enteredEmail);

}

function advanceToPart2() {

	let part1 = document.getElementById('formPart1');
	let part2 = document.getElementById('formPart2');

	part1.style.opacity = '0';

	setTimeout( () => {

		part1.style.display = 'none';
		part2.style.display = 'block';

		setTimeout( () => {
			part2.style.opacity = '1';
		}, 300);

	}, 300);

}

function displayEmailError() {

	let emailError = document.querySelector('.p-home__form__emailError');

	emailError.style.opacity = '1';

}