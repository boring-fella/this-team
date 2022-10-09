import storageAPI from './local-storage-api';

function saveCurrentFilmsToLocal(films) {
  storageAPI.save('display-films', films);
}

function getFilmFromLocal(id) {
  const localFilms = storageAPI.load('display-films');
  const currentFilm = localFilms.find(film => film.id === id);
  return currentFilm;
}

export { saveCurrentFilmsToLocal, getFilmFromLocal };
