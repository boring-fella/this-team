import storageAPI from './local-storage-api';
import { getFilmFromLocal } from './display-films';

const addBtnRef = document.querySelector('.btn__add-watched');
const filmContainerRef = document.querySelector('.film-container');

filmContainerRef.addEventListener('click', getFilmFromLocal);
addBtnRef.addEventListener('click', onClickBtnAddToWatched);

function checkFilmInLocalStor() {
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
  }
}

function addBtnRemoveWatched() {
  if (addBtnRef.textContent === 'add to watched') {
    addBtnRef.textContent = 'remove from watched';
    addBtnRef.classList.add('btn-add__active');
  }
}

function addBtnToWatched() {
  if (addBtnRef.textContent === 'remove from watched') {
    addBtnRef.textContent = 'add to watched';
    addBtnRef.classList.remove('btn-add__active');
  }
}
