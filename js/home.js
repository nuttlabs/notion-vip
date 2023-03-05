window.onload = () => {

	configureFormHandlers();

}

function configureFormHandlers() {

	let form = document.getElementById('subscribeForm');

	form.subscribeBtn.setAttribute('type', 'button');

	form.subscribeBtn.onclick = handleSubscription(form);

}

function handleSubscription(form) {

	console.log("Processing form.");

	let enteredEmail = form.email.value;

	let emailPattern = /.+@[a-z0-9]{2,}\.[a-z]{2,}/i;

	let isValidEmail = emailPattern.test(enteredEmail);

	console.log(isValidEmail);

}