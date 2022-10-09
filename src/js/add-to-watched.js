// import { save, load, remove } from './local-storage-api';

const LOC_STOR_KEY_WATCHED = 'watched-key';
const addBtnRef = document.querySelector('.btn__add-watched');

addBtnRef.addEventListener('Click', onClickBtnAddWatched);

onClickBtnAddWatched();

function onClickBtnAddWatched(e) {
  const savedData = load(LOC_STOR_KEY_WATCHED);

  if (!savedData) {
    //  save(LOC_STOR_KEY_WATCHED);
    addBtnRef.textContent = 'delete from watched';
    addBtnRef.style.backgroundColor = '#ff6b01';
  }

  remove(LOC_STOR_KEY_WATCHED);
  addBtnRef.textContent = 'add to watched';
  addBtnRef.style.backgroundColor = 'transparent';
}
