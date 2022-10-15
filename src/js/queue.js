import storageAPI from './local-storage-api';
import {
  saveCurrentFilmsToLocal,
  getFilmFromLocal,
  changeColorRating,
} from './display-films';
import FilmCards from './markup/film-cards-markup';
import { ifNotLibrary } from './markup/clear-markup';

let queueEl;

const filmContainer = document.querySelector('.film-container');
const filmLibrary = document.querySelector('.please-choose');
const viewQueue = document.querySelector('#queue');
const viewWatched = document.querySelector('#watched');

// вішаємо слухачів
try {
  filmContainer.addEventListener('click', getFilmFromLocal);
  try {
    filmLibrary.removeEventListener('click', getFilmFromLocal);
    viewQueue.removeEventListener('click', clickOnQueue);
  } catch (error) {}
} catch (error) {
  filmLibrary.addEventListener('click', getFilmFromLocal);
  viewQueue.addEventListener('click', clickOnQueue);
  try {
    filmContainer.removeEventListener('click', getFilmFromLocal);
  } catch (error) {}
  clickOnQueue();
}

// додаємо або видаляємо фильм до/з списку фильмів в черзі при кліку на кнопці в модалці
function changeListQueue() {
  const isFilmNotInclude = filmNotQueue();
  const actualFilm = storageAPI.load('currentFilm');
  let queueFilms = storageAPI.load('queueFilms');
  queueFilms = queueFilms ? queueFilms : [];
  if (isFilmNotInclude) {
    queueFilms.push(actualFilm);
    storageAPI.save('queueFilms', queueFilms);
    changeButtonForRemove();
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
    } catch (error) {}
  }
}

// змінює колір та напис на кнопці в модалці щодо фильмів в черзі (ФИЛЬМ У ЧЕРЗІ)
export function changeButtonForRemove() {
  if (queueEl.textContent === 'add to queue') {
    queueEl.textContent = 'remove from queue';
    queueEl.classList.add('btn-add__active');
  }
}

// змінює колір та напис на кнопці в модалці щодо фильмів в черзі (фильм НЕ у черзі)
export function changeButtonForAdd() {
  if (queueEl.textContent === 'remove from queue') {
    queueEl.textContent = 'add to queue';
    queueEl.classList.remove('btn-add__active');
  }
}

// відображає фильми, які є в бібліотеці
export function viewFilmLibrary() {
  if (viewQueue.classList.contains('btn-add__active')) {
    try {
      let queueFilms = storageAPI.load('queueFilms');
      if (queueFilms.length === 0) {
        ifNotLibrary();
        return;
      }
      saveCurrentFilmsToLocal(queueFilms);
      filmLibrary.classList.remove('please-choose__empty');
      filmLibrary.innerHTML = FilmCards.createFilmCardMarkup(queueFilms);
    } catch (error) {}
  }
  if (viewWatched.classList.contains('btn-add__active')) {
    try {
      let watchedFilms = storageAPI.load('watchedFilms');
      if (watchedFilms.length === 0) {
        ifNotLibrary();
        return;
      }
      saveCurrentFilmsToLocal(watchedFilms);
      filmLibrary.classList.remove('please-choose__empty');
      filmLibrary.innerHTML = FilmCards.createFilmCardMarkup(watchedFilms);
    } catch (error) {}
  }
}

// перевіряє чи немає фильму в черзі. Повертає "правда", якщо фільму немає
export function filmNotQueue() {
  const actualFilm = storageAPI.load('currentFilm');
  let queueFilms = storageAPI.load('queueFilms');
  queueFilms = queueFilms ? queueFilms : [];
  const isFilmNotInclude =
    queueFilms.find(film => film.id === actualFilm.id) === undefined;
  return isFilmNotInclude;
}

// запускає запуск відображення фільмів в бібліотеці queue
function clickOnQueue() {
  viewQueue.classList.add('btn-add__active');
  viewWatched.classList.remove('btn-add__active');
  viewFilmLibrary();
  changeColorRating();
}

// шукає кнопку QUEUE після рендеру модалки
export function findBtnQueue() {
  queueEl = document.querySelector('.btn-queue-js');
  queueEl.addEventListener('click', changeListQueue);
}
