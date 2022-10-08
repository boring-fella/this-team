import FilmsAPI from './fetch/fetch-films';
import FilmCards from './markup/film-cards-markup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('#search-form'),
  inputEl: document.querySelector('#search'),
  filmGalleryContainer: document.querySelector('.film-container'),
};

const filmsSerchAPI = new FilmsAPI();

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

  filmsSerchAPI.resetPage();

  filmsSerchAPI
    .fetchFilms(filmsSerchAPI.query)
    .then(data => {
      if (!data.results.length) {
        Notify.failure(
          'Sorry, there are no films matching your search query. Please try again.',
          {
            position: 'right-top',
            fontSize: '12px',
          }
        );
        return;
      }

      clearMurkup();
      appendFilmCardsMarkup(data);

      const totalResults = data.total_results;
      Notify.success(`We found ${totalResults} films. Enjoy!`, {
        position: 'right-top',
        fontSize: '14px',
      });
    })

    .catch(onFetchError);
}

function onFetchError() {
  error => {
    Notify.failure(
      'Sorry, there are no films matching your search query. Please try again.',
      {
        position: 'right-top',
        fontSize: '12px',
      }
    );
  };
}

// markup functions
function appendFilmCardsMarkup(data) {
  console.log('Данные с бэка по запросу (data.results):');
  console.log(data.results);

  refs.filmGalleryContainer.insertAdjacentHTML(
    'beforeend',
    FilmCards.createFilmCardMarkup(data.results)
  );
}

function clearMurkup() {
  refs.filmGalleryContainer.innerHTML = '';
}
