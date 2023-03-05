window.onload = () => {

	configureFormHandlers();

}

function configureFormHandlers() {

	let form = document.getElementById('subscribeForm');

	form.subscribeBtn.setAttribute('type', 'button');

	return true;

}

function handleSubscription(event) {

	let form = event.target;

	console.log(form);

	let enteredEmail = form.email.value;

	let emailPattern = /.+@[a-z0-9]{2,}\.[a-z]{2,}/i;

	let isValidEmail = enteredEmail.match(emailPattern) != null;

	console.log(isValidEmail);

	return false;

	if( isValidEmail ) {
		console.log("Bad email!");
		return false;
	}

}