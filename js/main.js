window.addEventListener('load', () => {

    freezeBodyOnMenuOpen();
    addTopicDividers();

});

function freezeBodyOnMenuOpen() {

    let menu = document.querySelector('.c-header__menu');

    let observer = new MutationObserver( (mutationList, observer) => {
        if( document.querySelector('.c-header__menu').style.display == 'flex' ){
            document.body.style.width = '100%';
            document.body.style.position = 'fixed';
        } else {
            document.body.style.position = 'static';
        }
    });

    observer.observe(menu, {attributes: true});

}

function addTopicDividers() {

    let topicDivs = document.querySelectorAll('.topicslist > div:not(:last-of-type)');

    if( topicDivs.length ) {

        topicDivs.forEach( (topicDiv) => {
            let divider = document.createElement('div');
            divider.classList.add('topicDivider');
            divider.innerHTML = "/";
            topicDiv.after(divider);
        });

    }

}