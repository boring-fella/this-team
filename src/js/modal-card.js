(() => {
const refs = {
    filmCard: document.querySelector('.film-container'),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    };
  
    refs.filmCard.addEventListener('click', modalIsHidden);
    refs.closeModalBtn.addEventListener("click", visibilityIsHidden);

function modalIsHidden() {
  refs.modal.classList.add('is-hidden');
}
function visibilityIsHidden() {
  refs.modal.classList.remove('is-hidden');
}
    
})();