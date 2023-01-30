window.addEventListener('load', () => {
	addVersionToStylesheets();
	addGradientTextClass();
});

function addVersionToStylesheets() {
	document.querySelectorAll('link[rel=stylesheet]').forEach( linkNode => {
		linkNode.setAttribute('href', linkNode.getAttribute('href') + '?v=' + Date.now());
	})
}

function addGradientTextClass() {
	document.querySelectorAll('h1 span').forEach( (span) => {
		if( span.getAttribute('style') && span.getAttribute('style').match('background-clip') ) {
			span.classList.add('paddedGradientText');
		}
	});

}