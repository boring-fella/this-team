import { getFilmFromLocal } from './display-films';

const refs = {
  clickFilm: document.querySelector('.film__card'),
  filmCard: document.querySelector('.film-container'),
  filmCardLibrary: document.querySelector('.please-choose'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  btnScroll: document.querySelector('.btn-scroll'),
};

let fixBlocks = document.querySelector('.fix-block');

try {
  refs.filmCard.addEventListener('click', modalIsVisible);
} catch (error) {
  refs.filmCardLibrary.addEventListener('click', modalIsVisible);
}

// закрываем модалку по Esc
const closeEsc = evt => {
  if (evt.key === 'Escape') {
    visibilityIsHidden();
  }
};

// Закрывает модалку по клику в стороне
const closeClick = evt => {
  if (evt.target === refs.modal) {
    visibilityIsHidden();
  }
};

function modalIsVisible(evt) {
  if (
    evt.currentTarget === evt.target ||
    evt.target.classList.contains('please-js')
  ) {
    return;
  }
  refs.btnScroll.style = 'hidden';
  refs.modal.classList.add('is-visible');
  let paddingOffSet = window.innerWidth - document.body.offsetWidth + 'px';
  document.body.style.overflow = 'hidden';  
  fixBlocks.style.paddingRight = paddingOffSet;
  document.body.style.paddingRight = paddingOffSet;
  document.addEventListener('click', closeClick);
  document.addEventListener('keydown', closeEsc);
  refs.closeModalBtn.addEventListener('click', visibilityIsHidden);
}

function visibilityIsHidden() {
  refs.modal.classList.remove('is-visible');
  document.body.style.overflow = 'visible';
  refs.btnScroll.style = 'visible';
  fixBlocks.style.paddingRight = 0;  
  document.body.style.paddingRight = 0;
  document.removeEventListener('click', closeClick);
  document.removeEventListener('keydown', closeEsc);
  refs.closeModalBtn.removeEventListener('click', visibilityIsHidden);
}
