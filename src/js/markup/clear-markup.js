import { refs } from '../refs/filmoteka-refs';

export function clearMurkup() {
  refs.filmGalleryContainer.innerHTML = '';
}

// відображає в бібліотеці котика, якщо не вибрано жодного фильму
export function ifNotLibrary() {
  const filmLibrary = document.querySelector('.please-choose');
  filmLibrary.classList.add('please-choose__empty');
  filmLibrary.innerHTML = `
        <p class="please-choose__text please-js">Please, select a film</p>
        <p
          class="please-choose__img please-js"
          width="450"
          height="250"
        />
      </p>`;
  filmLibrary.removeEventListener('click');
}
