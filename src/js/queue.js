import storageAPI from './local-storage-api';
import { saveCurrentFilmsToLocal, getFilmFromLocal } from './display-films';
import FilmCards from './markup/film-cards-markup';
import { hideElement } from './markup/hide-elements';

const queueEl = document.querySelector('.btn-queue-js');

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
  const isFilmNotInclude = filmNotQueue();
  const actualFilm = storageAPI.load('currentFilm');
  let queueFilms = storageAPI.load('queueFilms');
  if (isFilmNotInclude) {
    queueFilms = queueFilms.concat(actualFilm);
    storageAPI.save('queueFilms', queueFilms);
    changeButtonForRemove();
    // console.log('добавили фильм');
  } else {
    const filmForRemove = queueFilms.findIndex(
      film => film.id === actualFilm.id
    );
    queueFilms.splice(filmForRemove, 1);
    storageAPI.save('queueFilms', queueFilms);
    changeButtonForAdd();
    viewFilmQueue();
    // console.log('удалили фильм');
  }
}

export function changeButtonForRemove() {
  if (queueEl.textContent === 'add to queue') {
    queueEl.textContent = 'remove from queue';
    queueEl.classList.add('btn-add__active');
  }
}

export function changeButtonForAdd() {
  if (queueEl.textContent === 'remove from queue') {
    queueEl.textContent = 'add to queue';
    queueEl.classList.remove('btn-add__active');
  }
}

export function viewFilmQueue() {
  let queueFilms = storageAPI.load('queueFilms');
  try {
    filmLibrary.innerHTML = FilmCards.createFilmCardMarkup(queueFilms);
    viewQueue.classList.add('btn-add__active');
  } catch {}
}

export function filmNotQueue() {
  const actualFilm = storageAPI.load('currentFilm');
  let queueFilms = storageAPI.load('queueFilms');
  queueFilms = queueFilms ? queueFilms : [];
  const isFilmNotInclude =
    queueFilms.find(film => film.id === actualFilm.id) === undefined;
  return isFilmNotInclude;
}
