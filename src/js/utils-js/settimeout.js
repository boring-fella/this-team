import { refs } from '../refs/filmoteka-refs';

export function setClearTextContentTimer() {
  setTimeout(() => {
    refs.notificationEl.textContent = '';
  }, 3000);
}
