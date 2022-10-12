import { getFilmFromLocal } from './display-films';
import { findGenreById } from './fetch/fetch-genres';
import {
  filmNotQueue,
  changeButtonForRemove,
  changeButtonForAdd,
  findBtnQueue,
} from './queue';
import {
  checkFilmInLocalStor,
  addBtnRemoveWatched,
  addBtnToWatched,
  findBtnWatched,
} from './add-to-watched';
import * as defaultPicture from '../images/film-default.jpg';

const BASE_IMAGES_URL = 'https://image.tmdb.org/t/p/w500';
// const RES_PICTURE =
//   'https://pixabay.com/get/g9b007b1f29e9adc0ae515b947bf22984ff721d4bc4a6c9569ee9e3e56c787e6fe6d0ccd309ad89af33b0973e7d3810b7aeb75335e9a93324c7a7b93a69f4f327_1280.jpg';



const refs = {
  filmCard: document.querySelector('.film-container'),
  modalInfo: document.querySelector('.modal_info'),
  filmCardLibrary: document.querySelector('.please-choose'),
};
try {
  refs.filmCard.addEventListener('click', modalIsHidden);
} catch (error) {
  refs.filmCardLibrary.addEventListener('click', modalIsHidden);
}
// refs.filmCard.addEventListener('click', modalIsHidden);

function modalIsHidden(evt) {
  const film = getFilmFromLocal(evt);
  const {
    poster_path,
    name,
    title,
    original_title,
    overview,
    popularity,
    genre_ids,
    vote_average,
    vote_count,
  } = film;

  refs.modalInfo.innerHTML = `
        <div modal__image-size>
          <img class="modal__image" src="${
            poster_path !== null ? BASE_IMAGES_URL + poster_path : defaultPicture
          }" alt="${title}" />
        </div>
        <div class="modal__container">
            <p class="modal__title">${original_title || title || name}</p>
            <table class="modal-table">
                <tr>
                    <td class="modal-table__title">Vote / Votes</td>
                    <td><span class="film-card__rating film-card__modal">${
                      Math.round(vote_average * 10) / 10
                    }</span> / ${vote_count} </td>
                </tr>
                <tr>
                    <td class="modal-table__title">Popularity</td>
                    <td>${Math.round(popularity * 10) / 10} </td>
                </tr>
                <tr>
                    <td class="modal-table__title">Original Title</td>
                    <td class="modal-table__title-upper">${original_title}</td>
                </tr>
                <tr>
                    <td class="modal-table__title">Genre</td>
                    <td>${findGenreById(genre_ids)}</td>
                </tr>
            </table>
            
            <p class="modal-about modal-about__upper">About</p>
            <p class="modal-about modal-about__container">${overview}</p>
            <ul class="btn btn-flex">
              <li>
                <button class="button btn__add btn__add-watched">add to watched</button>
              </li>
              <li>
                <button class="button btn__add btn-queue-js">add to queue</button>
              </li>
            </ul>
        </div>
            `;
  findBtnQueue();
  findBtnWatched();
  if (filmNotQueue()) {
    changeButtonForAdd();
  } else {
    changeButtonForRemove();
  }
  if (checkFilmInLocalStor()) {
    addBtnToWatched();
  } else {
    addBtnRemoveWatched();
  }
}