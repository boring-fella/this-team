import storageAPI from './local-storage-api';
import { getFilmFromLocal } from './display-films';
import { filmCard } from './filmoteka-popular';

const queueEl = document.querySelectorAll('.btn__add')[1];
const modalEL = document.querySelectorAll('.modal')[1];
let queueFilms = [];

const filmContainer = document.querySelector('.film-container');
filmContainer.addEventListener('click', getFilmFromLocal);

queueEl.addEventListener('click', addFilmToQueue);

function addFilmToQueue(evt) {
  console.log('Кликнул по кнопке');
  const actualFilm = storageAPI.load('currentFilm');
  let queueFilms = storageAPI.load('queueFilms');
  queueFilms = queueFilms ? queueFilms : [];

  const newQueueFilms = queueFilms.concat(actualFilm);

  storageAPI.save('queueFilms', newQueueFilms);
}
