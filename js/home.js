window.onload = () => {

	configureFormHandlers();

}

function configureFormHandlers() {

	let form = document.getElementById('subscribeForm');

	form.subscribeBtn.setAttribute('type', 'button');

	form.subscribeBtn.onclick = function() {
		handleSubscription(form);
	}

}

function handleSubscription(form) {

	let enteredEmail = form.email.value;

	let emailPattern = /.+@[a-z0-9]{2,}\.[a-z]{2,}/i;

	let isValidEmail = emailPattern.test(enteredEmail);

	if( ! isValidEmail ) {
		let emailValidationMessage = document.querySelector('.p-home__form__emailinvalid');
		emailValidationMessage.style.display = 'block';
		setTimeout( () => {
			emailValidationMessage.style.opacity = 1;
		}, 200);
	} else {
		form.submit();
	}

}