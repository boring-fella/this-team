import storageAPI from './local-storage-api';

const queueEl = document.querySelectorAll('.btn__add')[1];
// console.log(queueEl);

queueEl.addEventListener('click', addFilmToQueue);

function addFilmToQueue(evt) {
  console.log('Кликнул по кнопке');
  console.log(evt.target);
}
