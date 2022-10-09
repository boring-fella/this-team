import FilmsAPI from './fetch/fetch-films';
import FilmCards from './markup/film-cards-markup';
import { hideElement, hideMark } from './markup/hide-elements';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('#search-form'),
  inputEl: document.querySelector('#search'),
  notificationEl: document.querySelector('.text-error'),
  filmGalleryContainer: document.querySelector('.film-container'),
};

refs.notificationEl.textContent = '';
console.dir(refs.notificationEl.textContent);

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
        refs.notificationEl.textContent =
          'Sorry, there are no films matching your search query. Please try again.';

        const noMatchTimer = setTimeout(() => {
          refs.notificationEl.textContent = '';
        }, 2000);

        // Notify.failure(
        //   'Sorry, there are no films matching your search query. Please try again.',
        //   {
        //     position: 'right-top',
        //     fontSize: '12px',
        //   }
        // );
        return;
      }

      refs.notificationEl.textContent = '';

      clearMurkup();
      appendFilmCardsMarkup(data);
      hideElement();

      const totalResults = data.total_results;
      refs.notificationEl.textContent = `We found ${totalResults} films. Enjoy!`;

      const succesTimer = setTimeout(() => {
        refs.notificationEl.textContent = '';
      }, 2000);

      // Notify.success(`We found ${totalResults} films. Enjoy!`, {
      //   position: 'right-top',
      //   fontSize: '14px',
      // });
    })

    .catch(onFetchError);
}

function onFetchError() {
  error => {
    refs.notificationEl.textContent =
      'Sorry, there are no films matching your search query. Please try again.';

    const errorTimer = setTimeout(() => {
      refs.notificationEl.textContent = '';
    }, 2000);

    // Notify.failure(
    //   'Sorry, there are no films matching your search query. Please try again.',
    //   {
    //     position: 'right-top',
    //     fontSize: '12px',
    //   }
    // );
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
