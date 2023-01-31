document.addEventListener('load', () => {
   applyNVipGradients();
});

function applyNVipGradients() {

   document.querySelectorAll('.td-navbar-item-button, button, .containsNVipGradient span span span').forEach( node => {
      if( node.getAttribute('style').includes('linear-gradient') ) {
          node.style.backgroundImage = 'var(--gradient--nVip)';
      }
   });

}