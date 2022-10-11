(() => {
  const refs = {
    filmCard: document.querySelector('.film-container'),
    filmCardLibrary: document.querySelector('.please-choose'),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };
  
  try {
  refs.filmCard.addEventListener('click', modalIsHidden);
} catch (error) {
  refs.filmCardLibrary.addEventListener('click', modalIsHidden);
}
  
    // refs.filmCard.addEventListener('click', modalIsHidden);
    refs.closeModalBtn.addEventListener("click", visibilityIsHidden);
  
  // закрываем модалку по Esc
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      visibilityIsHidden();
    }
  });

// должно бы закрывать по клику в стороне... но все наоборот...
  
  
  // document.addEventListener('click', evt => {
  //   const target = evt.target
  //   if (!target.closest('.modal')) {
  //     return
  //   }
  //   visibilityIsHidden();
  // });




function modalIsHidden() {
  refs.modal.classList.add('is-hidden');
}
function visibilityIsHidden() {
  refs.modal.classList.remove('is-hidden');
}
    
})();