import PopFilmsAPI from './fetch/fetch-trailer';

const filmSerchAPI = new PopFilmsAPI();

let btnTrailer;
let posterFilm;

const cardModal = document.querySelector('.modal_info');
const backdropTrailer = document.querySelector('.backdrop-trailer');
const modalFilm = document.querySelector('.modal-film-js');
const viewTrailer = document.querySelector('.trailer-modal-wrapper');
const styleBody = document.querySelector('body');

// виконується при кліку на кнопку трейлера
function clickBtnTrailer(evt) {
  backdropTrailer.classList.remove('is-hidden');
  document.addEventListener('keydown', eventKeydown, { capture: true });
  modalFilm.classList.add('modal-box-detale-trailler');
  backdropTrailer.addEventListener('click', backdrop, { capture: true });
  styleBody.style.cssText = `overflow: hidden;`;

  openTrailer(evt.target.dataset.id);
}

// дії при закритті модалки трейлера
function closeModal() {
  backdropTrailer.classList.add('is-hidden');
  document.removeEventListener('keydown', eventKeydown);
  viewTrailer.innerHTML = '';
  modalFilm.classList.remove('modal-box-detale-trailler');
  styleBody.style.cssText = `overflow: visible;`;
}

// вішає слухача на модалку для запуску трейлера
function addListenerTrailer() {
  btnTrailer = document.querySelector('.trailer__play-btn');
  posterFilm = document.querySelector('.modal__image');
  btnTrailer.addEventListener('click', clickBtnTrailer);
}

// знімає слухача трейлера
function removeListenerTrailer() {
  btnTrailer.removeEventListener('click', clickBtnTrailer);
}

// закриття модалки трейлера по Esc
function eventKeydown(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

// закриття модалки трейлера по кліку по бекдропу
function backdrop(evt) {
  if (evt.currentTarget === evt.target) {
    closeModal();
  }
}

// запит на сервер за трейлером
function openTrailer(id) {
  filmSerchAPI
    .fetchTrailer(id)
    .then(data => {
      const trailer = data.results.find(film => film.type === 'Trailer');
      const key = trailer.key;
      const trailerYouTube = `<iframe style="width: 100%; height: 100%;" data-id="${id}" src="https://www.youtube.com/embed/${key}?autoplay=1" loading = "lazy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Your browser does not support inline frames!</iframe>`;
      return (viewTrailer.innerHTML = trailerYouTube);
    })
    .catch(error => {
      viewTrailer.innerHTML = `<iframe style="width: 100%; height: 100%;" src="https://www.youtube.com/embed/GY8PkikQ8ZE" loading = "lazy" title="Error 404 not found - The Requested URL was Not Found on This Server" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>Your browser does not support inline frames!</iframe>`;
    });
}

function hiddenBtnTrailer() {
  btnTrailer.classList.add('visually-hidden');
}

function viewBtnTrailer() {
  btnTrailer.classList.remove('visually-hidden');
}

export {
  addListenerTrailer,
  removeListenerTrailer,
  hiddenBtnTrailer,
  viewBtnTrailer,
};
