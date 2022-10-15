import { findGenreById } from '../fetch/fetch-genres';
import * as defaultPicture from '../../images/film-default.jpg';

const BASE_IMAGES_URL = 'https://image.tmdb.org/t/p/w400';

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
          return `<li class="film__card">
          <img class="film-card__image" src="${
            poster_path ? BASE_IMAGES_URL + poster_path : defaultPicture
          }" alt="${title || name}" loading="lazy" title="Click to enlarge"/>
          <div class="film-card__features-wrap">
            <p class="film-card__title">${noTitle(
              title,
              name,
              original_title
            )}</p>
            <div class="film-card__tech-wrap">
              <p class="film-card__features">${findGenreById(
                genre_ids
              )}</p><span class="film-card__features-mark"> |</span>
              <p class="film-card__date">${sliceFunction(
                release_date,
                first_air_date
              )}</p>
              <p class="film-card__rating">${
                Math.round(vote_average * 10) / 10
              }</p>
            </div>
          </div>
        </li>
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

function noTitle(title, name, original_title) {
  if (!title && !name && original_title) {
    return 'no title';
  }
  return title || name || original_title;
}

function sliceFunction(release_date, first_air_date) {
  if (!release_date && !first_air_date) {
    return '';
  }

  if (release_date) {
    return release_date.slice(0, 4);
  }

  return first_air_date.slice(0, 4);
}

export default { createFilmCardMarkup };
