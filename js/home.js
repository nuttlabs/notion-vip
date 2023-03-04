let subscribeForm = {};

window.addEventListener('load', () => {
	configureFormHandler();
});

function configureFormHandler() {

	subscribeForm = document.querySelector("form[name='wf-form-Newsletter-Subscription']");

	subscribeForm.setAttribute('onsubmit', 'validateEmail()');

}

function validateEmail() {

	let enteredEmail = subscribeForm.email.value;

	let emailPattern = /.+@[a-z0-9]{2,}\.[a-z]{2,}/i;

	if( ! enteredEmail.match(emailPattern) ) return false;

}