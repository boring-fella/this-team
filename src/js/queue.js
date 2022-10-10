import storageAPI from './local-storage-api';
import { saveCurrentFilmsToLocal, getFilmFromLocal } from './display-films';
import FilmCards from './markup/film-cards-markup';
import { hideElement } from './markup/hide-elements';

const queueEl = document.querySelectorAll('.btn__add')[1];

const filmContainer = document.querySelector('.film-container');
const filmLibrary = document.querySelector('.please-choose');
const viewQueue = document.querySelector('#queue');

try {
  filmContainer.addEventListener('click', getFilmFromLocal);
} catch (error) {
  filmLibrary.addEventListener('click', getFilmFromLocal);
  viewQueue.addEventListener('click', viewFilmQueue);
}

queueEl.addEventListener('click', changeListQueue);

function changeListQueue() {
  const actualFilm = storageAPI.load('currentFilm');
  let queueFilms = storageAPI.load('queueFilms');
  queueFilms = queueFilms ? queueFilms : [];

  const isFilmNotInclude =
    queueFilms.find(film => film.id === actualFilm.id) === undefined;

  if (isFilmNotInclude) {
    queueFilms = queueFilms.concat(actualFilm);
    storageAPI.save('queueFilms', queueFilms);

    queueEl.classList.add('btn-add__active');
    textButtonForRemove();
    // console.log('добавили фильм');
  } else {
    const filmForRemove = queueFilms.findIndex(
      film => film.id === actualFilm.id
    );
    queueFilms.splice(filmForRemove, 1);
    storageAPI.save('queueFilms', queueFilms);

    queueEl.classList.remove('btn-add__active');
    textButtonForAdd();
    viewFilmQueue();
    // console.log('удалили фильм');
  }
}

function textButtonForRemove() {
  if (queueEl.textContent === 'add to queue') {
    queueEl.textContent = 'remove from queue';
  }
}

function textButtonForAdd() {
  if (queueEl.textContent === 'remove from queue') {
    queueEl.textContent = 'add to queue';
  }
}

function viewFilmQueue() {
  let queueFilms = storageAPI.load('queueFilms');
  saveCurrentFilmsToLocal(queueFilms);
  filmLibrary.innerHTML = FilmCards.createFilmCardMarkup(queueFilms);
  hideElement();
  viewQueue.classList.add('btn-add__active');
}
