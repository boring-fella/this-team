export function clearMurkup() {
  const refs = {
    filmGalleryContainer: document.querySelector('.film-container'),
  };

  refs.filmGalleryContainer.innerHTML = '';
}
