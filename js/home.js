window.addEventListener('load', addButtonListener );

function addButtonListener() {

	let subscribeBtn  = document.getElementById('subscribeBtn');

	subscribeBtn.onclick = advanceToPart2;

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
		}, 200);

	}, 200);

}