import { viewFilmQueue } from './queue'
import { viewFilmLibrary } from './queue'
// отримав достпуп до кнопок
const watched = document.querySelector('#watched');
const filmLibrary = document.querySelector('.please-choose');

try {
filmLibrary.addEventListener('click', getFilmFromLocal);
    watched.addEventListener('click', clickOnWatched);
} catch (error) {

}


function clickOnWatched() {
  watched.classList.add('btn-add__active');
  viewFilmLibrary();
  // viewWatched.classList.remove('btn-add__active');
}

