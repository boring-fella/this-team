import { viewFilmLibrary } from './queue';
import { changeColorRating } from './display-films';

// отримав достпуп до кнопок
const watched = document.querySelector('#watched');
const queue = document.querySelector('#queue');

try {
  watched.addEventListener('click', clickOnWatched);
} catch (error) {}

export function clickOnWatched() {
  watched.classList.add('btn-add__active');
  queue.classList.remove('btn-add__active');
  viewFilmLibrary();
  changeColorRating();
}
