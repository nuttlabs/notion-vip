function handleSubscription(event) {

	let form = event.target;

	console.log(form);

	return false;

	let enteredEmail = subscribeForm.email.value;

	let emailPattern = /.+@[a-z0-9]{2,}\.[a-z]{2,}/i;

	let isValidEmail = enteredEmail.match(emailPattern) != null;

	console.log(isValidEmail);

	if( isValidEmail ) {
		console.log("Bad email!");
		return false;
	}

}