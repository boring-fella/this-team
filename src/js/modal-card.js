import { getFilmFromLocal } from './display-films';

const refs = {
  clickFilm: document.querySelector('.film__card'),
  filmCard: document.querySelector('.film-container'),
  filmCardLibrary: document.querySelector('.please-choose'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  styleBody: document.querySelector('body'),
};

try {
  refs.filmCard.addEventListener('click', modalIsHidden);
} catch (error) {
  refs.filmCardLibrary.addEventListener('click', modalIsHidden);
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

function modalIsHidden(evt) {
  if (
    evt.currentTarget === evt.target ||
    evt.target.classList.contains('please-js')
  ) {
    return;
  }
  refs.modal.classList.add('is-hidden');
  refs.styleBody.style.cssText = `overflow: hidden;`;
  document.addEventListener('click', closeClick);
  document.addEventListener('keydown', closeEsc);
  refs.closeModalBtn.addEventListener('click', visibilityIsHidden);
}

function visibilityIsHidden() {
  refs.modal.classList.remove('is-hidden');
  refs.styleBody.style.cssText = `overflow: visible;`;
  document.removeEventListener('click', closeClick);
  document.removeEventListener('keydown', closeEsc);
  refs.closeModalBtn.removeEventListener('click', visibilityIsHidden);
}
