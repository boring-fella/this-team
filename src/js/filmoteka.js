import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import FilmsAPI from './fetch/fetch-films';
import FilmCards from './markup/film-cards-markup';

import { pagination } from './filmoteka-popular';
import { popular } from './filmoteka-popular';
import { scrollOnTop } from './scroll/scroll-to-top';
import { clearMurkup } from './markup/clear-markup';
import { hideElement, hideMark } from './markup/hide-elements';
import { onFetchError } from './error-function';

const refs = {
  formEl: document.querySelector('#search-form'),
  inputEl: document.querySelector('#search'),
  notificationEl: document.querySelector('.text-error'),
  filmGalleryContainer: document.querySelector('.film-container'),
};

const filmsSerchAPI = new FilmsAPI();

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 3,
  page: 1,
};

const paginationOnQuerry = new Pagination('pagination', options);
const page = paginationOnQuerry.getCurrentPage();

refs.notificationEl.textContent = '';

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  searchPicturers();
}

// search function
function searchPicturers() {
  if (!refs.inputEl.value.trim()) {
    return;
  }

  filmsSerchAPI.query = refs.inputEl.value.trim();

  pagination.off('afterMove', popular);
  paginationOnQuerry.off('afterMove', userByQuery);

  filmsSerchAPI
    .fetchFilms(page)
    .then(data => {
      if (!data.results.length) {
        refs.notificationEl.textContent =
          'Sorry, there are no films matching your search query. Please try again.';

        const noMatchTimer = setTimeout(() => {
          refs.notificationEl.textContent = '';
        }, 2000);

        return;
      }

      refs.notificationEl.textContent = '';

      clearMurkup();
      appendFilmCardsMarkup(data.results);
      paginationOnQuerry.reset(data.total_results);
      hideElement();

      paginationOnQuerry.on('afterMove', userByQuery);

      const totalResults = data.total_results;
      refs.notificationEl.textContent = `We found ${totalResults} films. Enjoy!`;

      const succesTimer = setTimeout(() => {
        refs.notificationEl.textContent = '';
      }, 2000);
    })

    .catch(onFetchError);
}

function userByQuery(event) {
  const currentPage = event.page;
  filmsSerchAPI
    .fetchFilms(currentPage)
    .then(data => {
      scrollOnTop();
      clearMurkup();
      appendFilmCardsMarkup(data.results);
    })

    .catch(onFetchError);
}

// markup functions
function appendFilmCardsMarkup(results) {
  refs.filmGalleryContainer.insertAdjacentHTML(
    'beforeend',
    FilmCards.createFilmCardMarkup(results)
  );

  hideElement();
}
