import storageAPI from './local-storage-api';
import { getFilmFromLocal } from './display-films';
import { clickOnWatched } from './watched';

let addBtnRef;
const filmContainerRef = document.querySelector('.film-container');
const watchedRef = document.querySelector('#watched');

try {
  filmContainerRef.addEventListener('click', getFilmFromLocal);
} catch (error) {}

export function checkFilmInLocalStor() {
  const newFilm = storageAPI.load('currentFilm');
  let watchedFilms = storageAPI.load('watchedFilms');
  watchedFilms = watchedFilms ? watchedFilms : [];
  const isFilmNotInclude =
    watchedFilms.find(film => film.id === newFilm.id) === undefined;
  return isFilmNotInclude;
}

function onClickBtnAddToWatched() {
  const isFilmNotInclude = checkFilmInLocalStor();
  const newFilm = storageAPI.load('currentFilm');
  let watchedFilms = storageAPI.load('watchedFilms');
  watchedFilms = watchedFilms ? watchedFilms : [];
  if (isFilmNotInclude) {
    watchedFilms.push(newFilm);
    storageAPI.save('watchedFilms', watchedFilms);
    addBtnRemoveWatched();
  } else {
    const filmRemove = watchedFilms.findIndex(film => film.id === newFilm.id);
    watchedFilms.splice(filmRemove, 1);
    storageAPI.save('watchedFilms', watchedFilms);

    addBtnToWatched();
    try {
      if (watchedRef.classList.contains('btn-add__active')) {
        clickOnWatched();
      }
    } catch (error) {}
  }
}

export function addBtnRemoveWatched() {
  if (addBtnRef.textContent === 'add to watched') {
    addBtnRef.textContent = 'remove from watched';
    addBtnRef.classList.add('btn-add__active');
  }
}

export function addBtnToWatched() {
  if (addBtnRef.textContent === 'remove from watched') {
    addBtnRef.textContent = 'add to watched';
    addBtnRef.classList.remove('btn-add__active');
  }
}

export function findBtnWatched() {
  addBtnRef = document.querySelector('.btn__add-watched');
  addBtnRef.addEventListener('click', onClickBtnAddToWatched);
}
