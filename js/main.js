
window.addEventListener('load', () => {
    console.log("Window loaded");
    freezeBodyOnMenuOpen();
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