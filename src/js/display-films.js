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

function changeColorRating() {
  const ratingAll = document.querySelectorAll('.film-card__rating');
  ratingAll.forEach((elem, index) => {
    if (elem.textContent < 6) {
      ratingAll[index].style.background = '#ff0000';
    }
    if (elem.textContent >= 6 && elem.textContent < 7.5) {
      ratingAll[index].style.background = '#ff6b08';
    }
    if (elem.textContent >= 7.5) {
      ratingAll[index].style.background = '#40c821';
    }
  });
}

export { saveCurrentFilmsToLocal, getFilmFromLocal, changeColorRating };
