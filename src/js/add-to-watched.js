import storageAPI from './local-storage-api';
import { getFilmFromLocal } from './display-films';

const addBtnRef = document.querySelector('.btn__add-watched');
const filmContRef = document.querySelector('.film-container');

addBtnRef.addEventListener('click', onClickBtnAddToWatched);
filmContRef.addEventListener('click', getFilmFromLocal);

function onClickBtnAddToWatched() {
  const newFilm = storageAPI.load('newfilm');
  let watchedFilms = storageAPI.load('watchedFilms');
  watchedFilms = watchedFilms ? watchedFilms : [];

  const isFilmNotInclude =
    watchedFilms.find(film => film.id === newFilm.id) === undefined;

  console.log(isFilmNotInclude);

  if (isFilmNotInclude) {
    watchedFilms = watchedFilms.concat(newFilm);
    storageAPI.save('watchedFilms', newFilm);

    addBtnDeleteWatched();
  } else {
    const filmRemove = watchedFilms.findIndex(film => film.id === newFilm.id);
    watchedFilms.splice(filmRemove, 1);
    storageAPI.save('watchedFilms', watchedFilms);

    addBtnToWatched();
  }
}

function addBtnDeleteWatched() {
  addBtnRef.textContent = 'delete from watched';
  addBtnRef.style.backgroundColor = '#ff6b01';
}

function addBtnToWatched() {
  addBtnRef.textContent = 'add to watched';
  addBtnRef.style.backgroundColor = '#fff';
}
