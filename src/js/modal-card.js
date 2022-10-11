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
    if (evt.key === 'Escape') {
      visibilityIsHidden();
    }
  });

  // Закрывает модалку по клику в стороне
  document.addEventListener('click', function (evt) {
    if (evt.target === refs.modal) {
      visibilityIsHidden();
    }
  });

function modalIsHidden() {
  refs.modal.classList.add('is-hidden');
}
function visibilityIsHidden() {
  refs.modal.classList.remove('is-hidden');
}
    
})();