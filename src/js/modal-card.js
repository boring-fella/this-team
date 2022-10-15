import { removeListenerTrailer, hiddenBtnTrailer } from './view-trailers';

const refs = {
  clickFilm: document.querySelector('.film__card'),
  filmCard: document.querySelector('.film-container'),
  filmCardLibrary: document.querySelector('.please-choose'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  btnScroll: document.querySelector('.scroll-to-top'),
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

// открывает модалку, скрывает вертикальный правый скролл и скролл вверх
function modalIsVisible(evt) {
  if (
    evt.currentTarget === evt.target ||
    evt.target.classList.contains('please-js')
  ) {
    return;
  }
  refs.btnScroll.classList.add('visually-hidden');
  refs.modal.classList.add('is-visible');
  let paddingOffSet = window.innerWidth - document.body.offsetWidth + 'px';
  document.body.style.overflow = 'hidden';
  fixBlocks.style.paddingRight = paddingOffSet;
  document.body.style.paddingRight = paddingOffSet;
  document.addEventListener('click', closeClick);
  document.addEventListener('keydown', closeEsc);
  refs.closeModalBtn.addEventListener('click', visibilityIsHidden);
}

// закрывает модалку показывает вертикальный правый скролл и скролл вверх
function visibilityIsHidden() {
  hiddenBtnTrailer();
  refs.modal.classList.remove('is-visible');
  document.body.style.overflow = 'visible';
  refs.btnScroll.classList.remove('visually-hidden');
  fixBlocks.style.paddingRight = 0;
  document.body.style.paddingRight = 0;
  document.removeEventListener('click', closeClick);
  document.removeEventListener('keydown', closeEsc);
  refs.closeModalBtn.removeEventListener('click', visibilityIsHidden);
  removeListenerTrailer();
}
