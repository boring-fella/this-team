import storageAPI from './local-storage-api';
import { saveCurrentFilmsToLocal, getFilmFromLocal } from './display-films';
import FilmCards from './markup/film-cards-markup';

const queueEl = document.querySelector('.btn-queue-js');

const filmContainer = document.querySelector('.film-container');
const filmLibrary = document.querySelector('.please-choose');
const viewQueue = document.querySelector('#queue');
const viewWatched = document.querySelector('#watched');

try {
  filmContainer.addEventListener('click', getFilmFromLocal);
} catch (error) {
  filmLibrary.addEventListener('click', getFilmFromLocal);
  viewQueue.addEventListener('click', clickOnQueue);
}

queueEl.addEventListener('click', changeListQueue);

function changeListQueue() {
  const isFilmNotInclude = filmNotQueue();
  const actualFilm = storageAPI.load('currentFilm');
  let queueFilms = storageAPI.load('queueFilms');
  queueFilms = queueFilms ? queueFilms : [];
  if (isFilmNotInclude) {
    queueFilms.push(actualFilm);
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
    try {
      if (viewQueue.classList.contains('btn-add__active')) {
        viewFilmLibrary();
      }
    } catch (error) {
      console.log(error.message);
    }
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

export function viewFilmLibrary() {
  if (viewQueue.classList.contains('btn-add__active')) {
    try {
      let queueFilms = storageAPI.load('queueFilms');
      saveCurrentFilmsToLocal(queueFilms);
      filmLibrary.innerHTML = FilmCards.createFilmCardMarkup(queueFilms);
    } catch (error) {
      console.log(error.message);
    }
  }
  if (viewWatched.classList.contains('btn-add__active')) {
    try {
      let watchedFilms = storageAPI.load('watchedFilms');
      console.log(watchedFilms);
      saveCurrentFilmsToLocal(watchedFilms);
      filmLibrary.innerHTML = FilmCards.createFilmCardMarkup(watchedFilms);
    } catch (error) {
      console.log(error.message);
    }
  }
}

export function filmNotQueue() {
  const actualFilm = storageAPI.load('currentFilm');
  let queueFilms = storageAPI.load('queueFilms');
  queueFilms = queueFilms ? queueFilms : [];
  const isFilmNotInclude =
    queueFilms.find(film => film.id === actualFilm.id) === undefined;
  return isFilmNotInclude;
}

function clickOnQueue() {
  viewQueue.classList.add('btn-add__active');
  viewWatched.classList.remove('btn-add__active');
  viewFilmLibrary();
}
