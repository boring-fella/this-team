import storageAPI from './local-storage-api';

// зберігає переданий масив фильмів в локал
function saveCurrentFilmsToLocal(films) {
  storageAPI.save('display-films', films);
}

// повертає об'єкт фільму з картки з локалу
function getFilmFromLocal(evt) {
  const localFilms = storageAPI.load('display-films');
  const currentDiv = evt.target.closest('.film__card');
  const titleFilm = currentDiv.querySelector('.film-card__title').textContent;
  const currentFilm = localFilms.find(film => film.title === titleFilm);
  storageAPI.save('currentFilm', currentFilm);
  return currentFilm;
}

export { saveCurrentFilmsToLocal, getFilmFromLocal };
