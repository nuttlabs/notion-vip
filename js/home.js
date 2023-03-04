let subscribeForm = {};

window.addEventListener('load', () => {
	// configureFormHandler();
});

function configureFormHandler() {

	subscribeForm = document.querySelector("form[name='wf-form-Newsletter-Subscription']");

	subscribeForm.setAttribute('onsubmit', 'return false;');

}

function validateEmail() {

	let enteredEmail = subscribeForm.email.value;

	let emailPattern = /.+@[a-z0-9]{2,}\.[a-z]{2,}/i;

	let isValidEmail = enteredEmail.match(emailPattern) != null;

	console.log(isValidEmail);

	if( isValidEmail ) {
		console.log("Bad email!");
		return false;
	}

}