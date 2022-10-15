import { refs } from '../refs/filmoteka-refs';

export function onFetchError(error) {
  console.log(error.message);

  refs.notificationEl.style.color = '#ff001b';
  refs.notificationEl.textContent =
    'Sorry, something going wrong... Please try again.';
}
