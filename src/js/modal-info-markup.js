import { getFilmFromLocal } from './display-films';
import { storageAPI } from './local-storage-api';




const clickOnFilmCard = document.querySelector('.film-container');
clickOnFilmCard.addEventListener('click', createModalInfo)


// console.log(getFilmFromLocal(894205));

// const currenFilm = getFilmFromLocal(894205)
// console.log(currenFilm);


function createModalInfo(keys) {
    const {
        poster_path,
        title,
        original_title,
        overview,
        popularity,
        genre_ids,
        vote_average,
        vote_count,
    } = keys
    return `<img class="modal__image" src="${poster_path}" alt="${title}" />
        <div>
            <p class="modal__title">${original_title}</p>
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
                    <td>${genre_ids}</td>
                </tr>
            </table>
            
            <p class="modal-about modal-about__upper">About</p>
            <p class="modal-about modal-about__container">${overview}</p>
            `;
        
};

export default { createModalInfo }
