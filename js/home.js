let subscribeForm = {};
let enteredEmail = '';

window.addEventListener('load', () => {
	addButtonListener();
	addFormListener();
	disableReturnKey();
});

function addButtonListener() {

	let subscribeBtn  = document.getElementById('subscribeBtn');

	subscribeBtn.onclick = function() {

		if( passesValidation() ) {
			advanceToPart2();
		} else {
			displayValidationError();
		}

	}

}

function passesValidation() {

	// Email validation
	let emailTestPattern = /.+@[a-z0-9]{2,}\.[a-z]{2,}$/i;
	enteredEmail = document.getElementById('email').value;
	let isValidEmail = emailTestPattern.test(enteredEmail);

	return( isValidEmail && subscribeForm.firstName.value.length );

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

function displayValidationError() {

	let validationError = document.querySelector('.p-home__form__validationerror');

	validationError.style.opacity = '1';

}

function addFormListener() {

	subscribeForm = document.getElementById('subscribeForm');

	subscribeForm.onsubmit = function() {
		hideSubheading();
		sendToMailerLite();
	}

}

function disableReturnKey() {

	document.addEventListener('keydown', (event) => {
	  if( event.which == 13 ) {
	      event.preventDefault();
	  }
	    
	} );

}

function hideSubheading() {
	document.querySelector('.subheading').style.display = 'none';
}

function sendToMailerLite() {

	let enteredName = subscribeForm.firstName.value;

	let mailerLiteToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiODk5ZjA5ODFlYzg2NzRmNzBhMzAyY2MyNDQ4ODk0MWVlMDVlMzVjM2U1ZDY3NDUxNWYxNGQ1MzBlYzRjNTEyYjhiNWZiYWExNmVkYmI0NDkiLCJpYXQiOjE2NzgyMDg5MTIuMDc1OTYsIm5iZiI6MTY3ODIwODkxMi4wNzU5NjIsImV4cCI6NDgzMzg4MjUxMi4wNzE4ODksInN1YiI6IjE4NDQiLCJzY29wZXMiOltdfQ.wxfRyN2SNSug0P27h4RGCnOXpJkOIgpRiDBCkRUBCEHzbbPwt70es7UMCsNyjHvHrt0lzZ3hQ_on9pZVI2DDobeWEd9Iz39WGcSTRvxVtBinw3xS7ZFnCkqiheJBq6HKAa9NZ043CBJlqmBdK_Gmu1qgb4jXRhnsHu4NZlw5U-GxwuSZ9ifMwTO_M-ogTuQQNMEAIUUqqpjPQtz9DmrrY7_uRGLxqVdI10i0VI27pfjZTEhVoDi2W0dsJU4_UEAj4r4zgN9K0OfeczbV319-nuHEjYfdcM_qVX_E9xSg57IJXoWHOVkG1oxT-XEuHmnnoYIviimQW1ZTUI6YpVLOIPUJETcFdyrNGPuKcOSqIrlu6peP1FdDOhisfYc9hGXO4oJlkhF39BQD91hSJspoX8XBCuJRDJ-vMgAIBaISuaA2skQ48RsSxpwzRKswCiD9gz1E5rwkF71OdcCJy0Xohkkz7NtWniaJylf4_g2uRylpUZ1Ij2yytT3YzQo8a63mcavDf6Jd0hLmR0-t7c2zH4Shdtt62eKXbgvAkvYPLzwwP-lJeUvU3-Zv5a0uE8YcOfxCoTx7fj613fHTvaFG7hj7_PaDG9fpdwxk6_0-9VGLO1QAvW32mdjq7zEWb9jSNT1x8tdTD6huRO1PGelu93wEUml3u8B1LDK7NxU_tE8';

	let fetchOptions = {
		method: 'POST',
		headers: {
			accept: 'application/json',
			'content-type': 'application/json',
			authorization: 'Bearer ' + mailerLiteToken
		},
		body: `{
			"email": "${enteredEmail}",
			"fields": {
				"First Name": "${enteredName}"
			},
			"groups": [
				"81656172659082806"
			]
		}`
	}

	console.log(fetchOptions);

	fetch('https://connect.mailerlite.com/api/subscribers', fetchOptions)
		.then( (response) => response.json() )
		.then( (response) => console.log(response) );

}