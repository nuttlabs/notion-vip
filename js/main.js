window.addEventListener('load', () => {
	// addVersionToStylesheets();
	replaceNebulaGradients();
	addGradientTextClass();
});

function addVersionToStylesheets() {
	document.querySelectorAll('link[rel=stylesheet]').forEach( linkNode => {
		linkNode.setAttribute('href', linkNode.href + '?v=' + Date.now());
	})
}

function addGradientTextClass() {
	document.querySelectorAll('h1 span').forEach( (span) => {
		if( span.getAttribute('style') && span.getAttribute('style').match('background-clip') ) {
			span.classList.add('paddedGradientText');
		}
	});

}

function replaceNebulaGradients() {

	document.querySelectorAll('span').forEach( span => {
		if( span.style.backgroundImage == "linear-gradient(135deg, rgb(102, 153, 255) 0%, rgb(255, 51, 102) 100%)" ) {
			span.style.backgroundImage = "var(--gradient--nVip)";
		}
	});

}