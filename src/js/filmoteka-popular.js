import Pagination from 'tui-pagination';

import PopFilmsAPI from './fetch/fetch-popular-films';
import FilmCards from './markup/film-cards-markup';

import { scrollOnTop } from './scroll/scroll-to-top';
import { clearMurkup } from './markup/clear-markup';
import { hideElement, hideSpan } from './markup/hide-elements';
import { saveCurrentFilmsToLocal, getFilmFromLocal } from './display-films';
import { toggleLoader } from './loader';

const popFilmsSerchAPI = new PopFilmsAPI();

const refs = {
  filmGalleryContainer: document.querySelector('.film-container'),
};

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
};

export const pagination = new Pagination('pagination', options);
const page = pagination.getCurrentPage();

window.addEventListener('load', onWindowLoad);

function onWindowLoad(event) {
  return popFilmsSerchAPI.fetchPopFilms(page).then(data => {
    clearMurkup();
    appendFilmCardsMarkup(data.results);
    pagination.reset(data.total_results);
    toggleLoader();
  });
}

pagination.on('afterMove', popular);

export function popular(event) {
  const currentPage = event.page;
  popFilmsSerchAPI.fetchPopFilms(currentPage).then(data => {
    scrollOnTop(0);
    clearMurkup();
    appendFilmCardsMarkup(data.results);
  });
}

// markup functions
function appendFilmCardsMarkup(results) {
  saveCurrentFilmsToLocal(results);

  refs.filmGalleryContainer.insertAdjacentHTML(
    'beforeend',
    FilmCards.createFilmCardMarkup(results)
  );
  hideElement();
  hideSpan();
}
