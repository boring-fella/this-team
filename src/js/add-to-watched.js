import storageAPI from './local-storage-api';
import { saveCurrentFilmsToLocal, getFilmFromLocal } from './display-films';

const refs = {
  addBtn: document.querySelector('.btn__add-watched'),
  filmContainer: document.querySelector('.film-container'),
};

refs.filmContainer.addEventListener('click', getFilmFromLocal);
refs.addBtn.addEventListener('click', onClickBtnAddToWatch);

// Перевіряє чи є фільм в переглянутих
function checkFilmInLocStor() {
  const newFilm = storageAPI.load('currentFilm');
  let watchedFilms = storageAPI.load('watchedFilms');
  watchedFilms = watchedFilms ? watchedFilms : [];
  const isFilmNotInclude =
    watchedFilms.find(film => film.id === newFilm.id) === undefined;

  return isFilmNotInclude;
}

// Додає в масив переглянутих фільмів в локалсторедж
function onClickBtnAddToWatch() {
  const isFilmNotInclude = checkFilmInLocStor();
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
    saveCurrentFilmsToLocal(watchedFilms);

    addBtnToWatched();
  }
}

function addBtnRemoveWatched() {
  if (refs.addBtn.textContent === 'add to Watched') {
    refs.addBtn.textContent = 'remove from watched';
    refs.addBtn.classList.add('btn-add__active');
  }
}

function addBtnToWatched() {
  if (refs.addBtn.textContent === 'remove from watched') {
    refs.addBtn.textContent = 'add to Watched';
    refs.addBtn.classList.add('btn-add__active');
  }
}
