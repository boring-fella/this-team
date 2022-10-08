const BASE_IMAGES_URL = 'https://image.tmdb.org/t/p/w500';

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
          <img class="film-card__image" src="${BASE_IMAGES_URL}${poster_path}" alt="${title}" loading="lazy" title="Click to enlarge"/>
          <div class="film-card__features-wrap">
            <p class="film-card__title">${title}</p>
            <div class="film-card__tech-wrap">
              <p class="film-card__features">${genre_ids} |</p>
              <p class="film-card__date">${release_date}</p>
              <p class="film-card__rating">${vote_average}</p>
            </div>
          </div>
        </div>
        `;
      }
    )
    .join('');
}

export default { createFilmCardMarkup };
