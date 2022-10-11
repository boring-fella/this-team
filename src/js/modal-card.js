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
  
  refs.closeModalBtn.addEventListener("click", visibilityIsHidden);
  
  // закрываем модалку по Esc
  document.addEventListener('keydown', function (evt) {
    if (evt.key === 0) {
      visibilityIsHidden();
    }
  });
  
// должно бы закрывать по клику в стороне... 
    
//  const overlayClose = e => {
//   if (!e.target.closest('.modal')) {
//     visibilityIsHidden();
//   }
//   };  

function modalIsHidden() {
  refs.modal.classList.add('is-hidden');
  // modal.addEventListener('click', overlayClose);
}
function visibilityIsHidden() {
  refs.modal.classList.remove('is-hidden');
}
})();