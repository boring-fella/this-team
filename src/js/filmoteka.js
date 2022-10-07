import FilmsAPI from './fetch/fetch-films';
import PopFilmsAPI from './fetch/fetch-popular-films';
import FilmCards from './markup/film-cards-markup';

const refs = {
  //   formEl: document.querySelector('#search-form'),
  testEl: document.querySelector('.section-main'),
};

// refs.formEl.addEventListener('submit', onFormSubmit);

// refs.testEl.addEventListener('click', onTestElClick);

const popFilmsSerchAPI = new PopFilmsAPI();
const filmsSerchAPI = new FilmsAPI();

// ------ test functions -------
function onTestElClick(event) {
  console.log('Клик по секции и приход популярных фильмов с бэка:');

  popFilmsSerchAPI.fetchPopFilms().then(data => console.log(data));
}

// markup functions
function appendFilmCardsMarkup(results) {
  console.log(results);
  refs.filmGalleryContainer.insertAdjacentHTML(
    'beforeend',
    FilmCards.createFilmCardMarkup(results)
  );
}
// end of the test functions
