document.addEventListener('load', () => {

   // TEMPORARY
   addVersionsToStylesheets();

   applyNVipGradients();
   
});

funcation addVersionsToStylesheets() {
   document.querySelectorAll('link[rel=stylesheet]').forEach( stylesheetNode => {
        stylesheetNode.href += '?v=' + Date.now();
    });
}

function applyNVipGradients() {

   document.querySelectorAll('.td-navbar-item-button, button, .containsNVipGradient span span span').forEach( node => {
      if( node.getAttribute('style').includes('linear-gradient') ) {
          node.style.backgroundImage = 'var(--gradient--nVip)';
      }
   });

}