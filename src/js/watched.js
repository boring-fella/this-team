import storageAPI from './local-storage-api';

let watchedFilms = [];


const watched = document.querySelector('#watched');

watched.addEventListener('click', onBtnWatchedClick);
// перевірка чи є в localStorage щось збережено
function onBtnWatchedClick(e) {
    try {
        watchedFilms = [...JSON.parse(localStorage.getItem('watchedFilms'))];
    } catch (error) {
        watchedFilms = [];
    }
}

