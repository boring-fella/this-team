(() => {
  const refs = {
    filmCard: document.querySelector('.film-container'),
    filmCardLibrary: document.querySelector('.please-choose'),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    styleBody: document.querySelector('body'),
  };


try {
  refs.filmCard.addEventListener('click', modalIsHidden);
} catch (error) {
  refs.filmCardLibrary.addEventListener('click', modalIsHidden);
}

refs.closeModalBtn.addEventListener('click', visibilityIsHidden);

function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    visibilityIsHidden();
  }
}
// Закрывает модалку по клику в стороне
document.addEventListener('click', function (evt) {
  if (evt.target === refs.modal) {
    visibilityIsHidden();
  }
});

function modalIsHidden() {
  refs.modal.classList.add('is-hidden');

  refs.styleBody.style.cssText = `overflow: hidden;`;

}

function visibilityIsHidden() {
  refs.modal.classList.remove('is-hidden');

  refs.styleBody.style.cssText = `overflow: visible;`;
//  refs.filmCard.removeEventListener('click', modalIsHidden);
// refs.closeModalBtn.removeEventListener("click", visibilityIsHidden);

}
