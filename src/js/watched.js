import { viewFilmQueue } from './queue'

const watched = document.querySelector('#watched');
const filmLibrary = document.querySelector('.please-choose');

try {
filmLibrary.addEventListener('click', getFilmFromLocal);
    watched.addEventListener('click', viewFilmQueue('watchedFilms'));
    watched.classList.add('btn-add__active');
} catch (error) {

}




