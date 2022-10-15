import Pagination from 'tui-pagination';

import PopFilmsAPI from './fetch/fetch-popular-films';
import FilmCards from './markup/film-cards-markup';

import { scrollOnTop } from './scroll/scroll-to-top';
import { clearMurkup } from './markup/clear-markup';
import { hideElement, hideSpan } from './markup/hide-elements';
import { saveCurrentFilmsToLocal, getFilmFromLocal } from './display-films';
import { toggleLoader } from './loader';
import { options } from './pagination-options';

const popFilmsSerchAPI = new PopFilmsAPI();

const refs = {
  filmGalleryContainer: document.querySelector('.film-container'),
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
    updateLastPaginationPage(data);
  });
}

pagination.on('afterMove', popular);

export function popular(event) {
  toggleLoader();
  const currentPage = event.page;
  popFilmsSerchAPI.fetchPopFilms(currentPage).then(data => {
    scrollOnTop(0);
    clearMurkup();
    appendFilmCardsMarkup(data.results);
    toggleLoader();
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
function updateLastPaginationPage({ total_pages }) {
  pagination.setTotalItems(total_pages);
  document.querySelector('.tui-ico-last').innerHTML = total_pages;
}
