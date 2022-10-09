import { findGenreById } from '../fetch/fetch-genres';
const BASE_IMAGES_URL = 'https://image.tmdb.org/t/p/w500';
const RES_PICTURE =
  'https://pixabay.com/get/g9b007b1f29e9adc0ae515b947bf22984ff721d4bc4a6c9569ee9e3e56c787e6fe6d0ccd309ad89af33b0973e7d3810b7aeb75335e9a93324c7a7b93a69f4f327_1280.jpg';

function createFilmCardMarkup(film) {
  return film
    .map(
      ({
        poster_path,
        title,
        original_title,
        name,
        genre_ids,
        release_date,
        first_air_date,
        vote_average,
      }) => {
        return `<div class="film__card">
          <img class="film-card__image" src="${
            poster_path === null ? RES_PICTURE : BASE_IMAGES_URL + poster_path
          }" alt="${title}" loading="lazy" title="Click to enlarge"/>
          <div class="film-card__features-wrap">
            <p class="film-card__title">${title || original_title || name}</p>
            <div class="film-card__tech-wrap">
              <p class="film-card__features">${
                findGenreById(genre_ids) || ''
              }<span class="film-card__features-mark"> |</span></p>
              <p class="film-card__date">${release_date.slice(0, 4) || ''}</p>
              <p class="film-card__rating">${
                Math.round(vote_average * 10) / 10
              }</p>
            </div>
          </div>
        </div>
        `;
      }
    )
    .join('');
}

export default { createFilmCardMarkup };
