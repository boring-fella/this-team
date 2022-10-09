import storageAPI from './local-storage-api';

// зберігає переданий масив фильмів в локал
function saveCurrentFilmsToLocal(films) {
  storageAPI.save('display-films', films);
}

// повертає об'єкт фільму за id з локалу
function getFilmFromLocal(evt) {
  // console.log('Ищем фильм');
  const localFilms = storageAPI.load('display-films');
  // console.log(localFilms);
  const currentDiv = evt.target.closest('.film__card');
  // console.log(currentDiv);
  const titleFilm = currentDiv.querySelector('.film-card__title').textContent;
  // console.log(titleFilm);
  const currentFilm = localFilms.find(
    film => film.original_title === titleFilm
  );
  storageAPI.save('currentFilm', currentFilm);
  // console.log(currentFilm);
  // const currentFilm = localFilms.find(film => film.id === id);
  return currentFilm;
}

export { saveCurrentFilmsToLocal, getFilmFromLocal };
