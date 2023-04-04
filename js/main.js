window.addEventListener('load', () => {

    freezeBodyOnMenuOpen();
    modifyTopics();
    addFooterYear();

});

function freezeBodyOnMenuOpen() {

    let menu = document.querySelector('.c-header__menu');

    let observer = new MutationObserver( (mutationList, observer) => {
        if( document.querySelector('.c-header__menu').style.display == 'flex' ){
            document.body.style.position = 'fixed';
        } else {
            document.body.style.position = 'static';
        }
    });

    observer.observe(menu, {attributes: true});

}

function modifyTopics() {

    let topicDivs = document.querySelectorAll('.topicslist > div');

    if( topicDivs.length ) {

        topicDivs.forEach( (topicDiv) => {

            // Drop the "Notion" from "Notion Stakeholder Series"
            if( topicDiv.firstChild.innerHTML == 'Notion Stakeholder Series' ) {
                topicDiv.firstChild.innerHTML = 'Stakeholder Series';
            }

            // Add dividers
            let divider = document.createElement('span');
            divider.classList.add('topicDivider');
            divider.innerHTML = "//";
            topicDiv.prepend(divider);

        });

    }

}

function addFooterYear() {
    
    let footer = document.querySelector('.c-footer');

    if( footer ) {
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        footer.innerHTML = footer.innerHTML.replace('©', '©' + currentYear);
    };

}