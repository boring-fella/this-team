import Pagination from 'tui-pagination';

import FilmsAPI from './fetch/fetch-films';
import FilmCards from './markup/film-cards-markup';

import { refs } from './refs/filmoteka-refs';
import { pagination } from './filmoteka-popular';
import { popular } from './filmoteka-popular';
import { setClearTextContentTimer } from './utils-js/settimeout';
import { scrollOnTop } from './scroll/scroll-to-top';
import { clearMurkup } from './markup/clear-markup';
import { hideElement, hideSpan } from './markup/hide-elements';
import { onFetchError } from './utils-js/error-function';
import { toggleLoader } from './loader';
import { saveCurrentFilmsToLocal } from './display-films';

const filmsSerchAPI = new FilmsAPI();

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
};

const paginationOnQuerry = new Pagination('pagination', options);
const page = paginationOnQuerry.getCurrentPage();

refs.notificationEl.style.color = '#ff001b';
refs.notificationEl.textContent = '';

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  toggleLoader();
  event.preventDefault();
  searchPicturers();
}

// search function
function searchPicturers() {
  if (!refs.inputEl.value.trim()) {
    toggleLoader();
    refs.notificationEl.style.color = '#ff001b';
    refs.notificationEl.textContent = 'Please, type something.';

    setClearTextContentTimer();
    return;
  }

  filmsSerchAPI.query = refs.inputEl.value.trim();

  if (filmsSerchAPI.lastQuery === filmsSerchAPI.searchQuery) {
    toggleLoader();
    return;
  }

  pagination.off('afterMove', popular);
  paginationOnQuerry.off('afterMove', userByQuery);

  filmsSerchAPI
    .fetchFilms(page)
    .then(data => {
      if (!data.results.length) {
        toggleLoader();
        clearMurkup();
        refs.notificationEl.style.color = '#ff001b';
        refs.notificationEl.textContent =
          'Sorry, there are no films matching your search query. Please, try again.';

        refs.paginationInHome.classList.add('tui-pagination-isHidden');
        refs.notificationPictureEl.classList.add('section-main__bcg');

        setClearTextContentTimer();

        filmsSerchAPI.lastQuery = '';
        return;
      }

      filmsSerchAPI.lastQuery = filmsSerchAPI.query;

      refs.notificationEl.textContent = '';
      refs.paginationInHome.classList.remove('tui-pagination-isHidden');
      refs.notificationPictureEl.classList.remove('section-main__bcg');

      scrollOnTop(0);
      clearMurkup();

      appendFilmCardsMarkup(data.results);
      toggleLoader();
      paginationOnQuerry.reset(data.total_results);
      hideElement();

      paginationOnQuerry.on('afterMove', userByQuery);

      const totalResults = data.total_results;

      refs.notificationEl.style.color = '#00ff22';
      refs.notificationEl.textContent = `We found ${totalResults} films. Enjoy!`;

      setClearTextContentTimer();
    })
    .catch(onFetchError);
}

function userByQuery(event) {
  const currentPage = event.page;
  filmsSerchAPI
    .fetchFilms(currentPage)
    .then(data => {
      scrollOnTop(0);
      clearMurkup();
      appendFilmCardsMarkup(data.results);
    })

    .catch(onFetchError);
}

function appendFilmCardsMarkup(results) {
  refs.filmGalleryContainer.insertAdjacentHTML(
    'beforeend',
    FilmCards.createFilmCardMarkup(results)
  );
  saveCurrentFilmsToLocal(results);
  hideElement();
  hideSpan();
}
