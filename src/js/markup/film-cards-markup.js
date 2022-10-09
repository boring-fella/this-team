import { findGenreById } from '../fetch/fetch-genres';

const BASE_IMAGES_URL = 'https://image.tmdb.org/t/p/w500';
const RES_PICTURE =
  'https://pixabay.com/get/g9b007b1f29e9adc0ae515b947bf22984ff721d4bc4a6c9569ee9e3e56c787e6fe6d0ccd309ad89af33b0973e7d3810b7aeb75335e9a93324c7a7b93a69f4f327_1280.jpg';

const refs = {
  notificationEl: document.querySelector('.text-error'),
};

function createFilmCardMarkup(film) {
  try {
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
              <p class="film-card__features">${findGenreById(
                genre_ids
              )}<span class="film-card__features-mark"> |</span></p>
              <p class="film-card__date">${sliceFunction(
                release_date || first_air_date
              )}</p>
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
  } catch (error) {
    console.log(error.message);

    refs.notificationEl.textContent =
      'Sorry, something going wrong... Please try again.';

    const onCatchTimer = setTimeout(() => {
      refs.notificationEl.textContent = '';
    }, 2000);
  }
}

function sliceFunction(filmDate) {
  if (!filmDate) {
    return '';
  }

  return filmDate.slice(0, 4);
}

export default { createFilmCardMarkup };
