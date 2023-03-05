window.onload = () => {

	configureFormHandlers();

}

function configureFormHandlers() {

	let form = document.getElementById('subscribeForm');

	form.subscribeBtn.setAttribute('type', 'button');

	form.subscribeBtn.onclick = function() {
		validateSubscription(form);
	}

}

function validateSubscription(form) {

	let enteredEmail = form.email.value;
	let enteredName = form.firstName.value;

	let emailPattern = /.+@[a-z0-9]{2,}\.[a-z]{2,}/i;

	let isValidEmail = emailPattern.test(enteredEmail);

	if( ! isValidEmail ) {
		let emailValidationMessage = document.querySelector('.p-home__form__emailinvalid');
		emailValidationMessage.style.display = 'block';
		setTimeout( () => {
			emailValidationMessage.style.opacity = 1;
		}, 200);
	} else {
		sendToMailerLite(enteredName, enteredEmail).then( (response) => console.log(response) );
		// form.subscribeBtn.setAttribute('type', 'submit');
		// form.subscribeBtn.click();
	}

}

function sendToMailerLite(name, email) {

	let fetchOptions = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			'accept': 'application/json',
			'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNGQwZWExZWJjZjRjMDE3NjNkMWVmOWVjMTk4NmY3NTFiMDA2MTFkNDc2ZGJiMTdiM2UwZGM2OTVhZjNjMTAwOTRhZDdkY2MzNjE5ZDYzYTkiLCJpYXQiOjE2Nzc5ODAzNTUuMDU3NTY2LCJuYmYiOjE2Nzc5ODAzNTUuMDU3NTcsImV4cCI6NDgzMzY1Mzk1NS4wNTAzNzksInN1YiI6IjE4NDQiLCJzY29wZXMiOltdfQ.wLzwXZfLjgAon_gH9ZnGRkH0k5L9Qnks54U7UEYv8Nl610B7xbX80XSE7FMwhveUN-65YVDVRXNV4lS3Sx6XN95JSfvD2Qbe-IS7U2qWopNYYIjeylBW4iPz5ik2nnxRLCeTXcfoaLEyyMKaibvguqujTNZp2MM2SLU2TwCbfymAn5kntxyagV7k1qIGVS7rlehb-ysDh3J5TV-iGZo6sm2O3-s5_wX1btjicAtD9BhROc0yz5sv-XmTx6VSQvYRwEAzly1JV5q9fdpO9tRU4An3poa4ZnMOX4izL6PcRTk7x1tU4kRNQ0_QgEv9Ypg8wb-Q430N0jjizsxRM6Ibu0CrKrRDKT8w9Pnj-bYwnmJZGqX1sci-hk4cmzHwL776v5Iv-hHnmkeehen3-rjgwNSzV_jzpnTWLvjrBZTJxqtE6xk5Qzep7rIzUKPt16vmh8BN07AjxHQk-gUahhVqHgMJCafvT2boMdKvEwBFDlDwglbIKBewDoBYazaH_AFWlcGMT4a8fFM6hVsoL9yHa_1tRwdvcqKZ17DVjcSNn5o-TqpSxpji3f6BPVJbubQ80wr9IiaIhcjKIdrexsWBd_eWY_99uO04Ts7nv8Wu_z-NF_gJfV8RgX27Gyp814F8lqRUP2C6EkGK3Fowvc5KEUEPnb33-uCsAxN82LFDsNs'
		},
		body: `{
			"email": "${email}",
			"fields": {
				"First Name": "${name}"
			},
			"groups": ["81656172659082806"]
		}`
	}

	return new Promise( (resolve, reject) => {

		fetch( 'https://connect.mailerlite.com/api/subscribers', fetchOptions )
			.then( (response) => response.json() )
			.then( (response) => {
				resolve(response);
			});

	});

}