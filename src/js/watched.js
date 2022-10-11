import { viewFilmQueue } from './queue';
import { viewFilmLibrary } from './queue';
// отримав достпуп до кнопок
const watched = document.querySelector('#watched');
const queue = document.querySelector('#queue');

try {
  watched.addEventListener('click', clickOnWatched);
} catch (error) {
  console.log(error);
}

function clickOnWatched() {
  watched.classList.add('btn-add__active');
  queue.classList.remove('btn-add__active');
  viewFilmLibrary();
}
