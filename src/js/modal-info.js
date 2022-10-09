import { getFilmFromLocal } from './display-films';
import { findGenreById } from './fetch/fetch-genres';

const BASE_IMAGES_URL = 'https://image.tmdb.org/t/p/w500';
const RES_PICTURE =
  'https://pixabay.com/get/g9b007b1f29e9adc0ae515b947bf22984ff721d4bc4a6c9569ee9e3e56c787e6fe6d0ccd309ad89af33b0973e7d3810b7aeb75335e9a93324c7a7b93a69f4f327_1280.jpg';


const refs = {
    filmCard: document.querySelector('.film-container'),
    modalInfo: document.querySelector('.modal_info')
};

refs.filmCard.addEventListener('click', modalIsHidden);

function modalIsHidden(evt) {

    const film = getFilmFromLocal(evt) 
    // console.log(getFilmFromLocal(evt));

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

    refs.modalInfo.innerHTML =
      `<img class="modal__image" src="${poster_path === null ? RES_PICTURE : BASE_IMAGES_URL + poster_path}" alt="${title}" />
        <div>
            <p class="modal__title">${original_title || title || name}</p>
            <table class="modal-table">
                <tr>
                    <td class="modal-table__title">Vote / Votes</td>
                    <td>${vote_average}/${vote_count} </td>
            
                </tr>
                <tr>
                    <td class="modal-table__title">Popularity</td>
                    <td>${popularity} </td>
                </tr>
                <tr>
                    <td class="modal-table__title">Original Title</td>
                    <td>${original_title}</td>
                </tr>
                <tr>
                    <td class="modal-table__title">Genre</td>
                    <td>${findGenreById(genre_ids)}</td>
                </tr>
            </table>
            
            <p class="modal-about modal-about__upper">About</p>
            <p class="modal-about modal-about__container">${overview}</p>
            `;    
};