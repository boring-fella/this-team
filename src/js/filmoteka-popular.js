import PopFilmsAPI from './fetch/fetch-popular-films';
import FilmCards from './markup/film-cards-markup';
import { hideElement, hideMark } from './markup/hide-elements';
import { saveCurrentFilmsToLocal, getFilmFromLocal } from './display-films';

const refs = {
  filmGalleryContainer: document.querySelector('.film-container'),
};

const popFilmsSerchAPI = new PopFilmsAPI();

window.addEventListener('load', onWindowLoad);

function onWindowLoad(event) {
  popFilmsSerchAPI.fetchPopFilms().then(results => {
    appendFilmCardsMarkup(results);
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
}
