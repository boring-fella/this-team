import storageAPI from './local-storage-api';

const LOC_STOR_KEY_WATCHED = 'watched-key';
const addBtnRef = document.querySelector('.btn__add-watched');

addBtnRef.addEventListener('Click', onClickBtnAddWatched);

function onClickBtnAddWatched(e) {
  const savedData = storageAPI.load(LOC_STOR_KEY_WATCHED);

  if (!savedData) {
    //  storageAPI.save(LOC_STOR_KEY_WATCHED);
    addBtnRef.textContent = 'delete from watched';
    addBtnRef.style.backgroundColor = '#ff6b01';
  }

  storageAPI.remove(LOC_STOR_KEY_WATCHED);
  addBtnRef.textContent = 'add to watched';
  addBtnRef.style.backgroundColor = 'transparent';
}
