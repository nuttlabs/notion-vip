window.addEventListener('load', () => {
    addTopicDividers();
})

function addTopicDividers() {

    let topicDivs = document.querySelectorAll('.p-insight__topicslist > div:not(:last-of-type)');

    topicDivs.forEach( (topicDiv) => {
        let divider = document.createElement('div');
        divider.classList.add('p-insight__topicDivider');
        divider.innerHTML = "/";
        topicDiv.after(divider);
    });

}